"use client";

import { useFetchData } from "@/hooks/useFetchData";
import useSnack from "@/hooks/useSnack";
import { AddArticle, editArticle, sendImage } from "@/services/fetch/articles";
import { getAllCategories } from "@/services/fetch/categories";
import { ServerUrl_media } from "@/services/server";
import { articleType } from "@/types/articles";
import { categoriesType } from "@/types/categories";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ArticleFormType = {
  title: string;
  content: string;
  image: string;
  categoryId: string;
  author: string;
};

type AddArticle_formType = {
  setOpenDialog: () => void
  handleFreshData: (value: articleType, type: 'add' | 'edit' | 'show') => void
  stateValue: { status: boolean, type: 'add' | 'edit' | 'show', value: articleType | null }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const AddArticle_form = ({ setOpenDialog, handleFreshData, stateValue }: AddArticle_formType) => {


  const { data: data_category } = useFetchData<categoriesType[]>({ fetchFunction: getAllCategories });


  const snack = useSnack()

  const [formData, setFormData] = useState<ArticleFormType>({
    title: "",
    content: "",
    image: "",
    categoryId: "",
    author: "",
  });
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);

  // تابع ریست کننده state
  const handleResetState = () => setFormData({ title: "", content: "", image: "", categoryId: "", author: "" })

  // پر کردن فرم در حالت ادیت
  useEffect(() => {
    if (stateValue.type === "edit" && stateValue.value != null) {
      console.log('حالت ویرایش', stateValue.value)
      setFormData({
        title: stateValue.value.title || "",
        content: stateValue.value.content || "",
        image: stateValue.value.image || "",
        categoryId: stateValue.value.categoryId?.toString() || "",
        author: stateValue.value.author || "",
      });
    } else {
      handleResetState();
    }
  }, [stateValue]);

  // ثبت تغییرات فرم در state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    console.log({ name, value });
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // آپلود تصویر و تنظیم آدرس در فرم
  const handleSelectImage: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const token = localStorage.getItem('token_myweblog');
    if (!token) {
      snack({ text: 'عدم دسترسی: ابتدا وارد شوید', variant: 'error' });
      return;
    }

    try {
      setIsUploadingImage(true);
      const res = await sendImage({ token, image: file });
      if ('imagePath' in res) {
        setFormData((prev) => ({ ...prev, image: res.imagePath }));
        snack({ text: res.message || 'تصویر با موفقیت آپلود شد', variant: 'success' });
      } else {
        snack({ text: res.message || 'خطا در آپلود تصویر', variant: 'error' });
      }
    } catch {
      snack({ text: 'خطا در آپلود تصویر', variant: 'error' });
    } finally {
      setIsUploadingImage(false);
      // پاک کردن ورودی فایل برای امکان انتخاب مجدد همان فایل
      e.currentTarget.value = '';
    }
  };

  // ارسال دیتا به سرور برای افزودن و ادیت
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ارسال مقاله:", formData);
    const token = localStorage.getItem('token_myweblog');
    if (!token) {
      snack({ text: 'مشکل در افزودن دسته بندی', variant: 'error' });
      return;
    }

    try {
      if (stateValue.type === 'add') {
        const resAdd = await AddArticle(formData, token);
        if ('status' in resAdd) {
          snack({ text: resAdd.message || 'خظا در انجام عملیات', variant: 'error' });
          return;
        }
        handleFreshData(resAdd as unknown as articleType, stateValue.type);
      } else if (stateValue.type === 'edit') {
        const id = stateValue.value ? stateValue.value.id : '';
        const resEdit = await editArticle(formData, token, id);
        if ('status' in resEdit) {
          snack({ text: resEdit.message || 'خظا در انجام عملیات', variant: 'error' });
          return;
        }
        handleFreshData(resEdit as articleType, stateValue.type);
      }

      handleResetState();
      setOpenDialog();

    } catch (error) {
      console.log('Error submitting article:', error);
      snack({
        text: 'خطا در انجام عملیات',
        variant: 'error'
      });
    }
  };







  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-stone-700 shadow-md mx-auto p-4 rounded-xl w-full"
    >
      <input
        type="text"
        name="title"
        placeholder="عنوان مقاله"
        value={formData.title}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />

      <textarea
        name="content"
        placeholder="محتوای مقاله"
        value={formData.content}
        onChange={handleChange}
        className="p-2 border rounded"
        rows={5}
        required
      />

      {/* آپلود تصویر */}
      <div className="flex flex-col gap-2">
        <label className="text-stone-200 text-sm">تصویر مقاله</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleSelectImage}
          disabled={isUploadingImage}
          className="bg-stone-600 file:bg-stone-500 disabled:opacity-60 p-2 file:px-3 file:py-1 border file:border-0 rounded file:rounded text-white file:text-white cursor-pointer"
        />
        {isUploadingImage && (
          <span className="text-blue-300 text-sm">در حال آپلود تصویر...</span>
        )}
        {!isUploadingImage && formData.image && (
          <div className="mt-1">
            <Image
              src={formData.image.startsWith('http') ? formData.image : `${ServerUrl_media}${formData.image.startsWith('/') ? '' : '/'}${formData.image}`}
              alt="تصویر مقاله"
              className="border rounded max-h-40"
              width={500}
              height={500}
            />
          </div>
        )}
      </div>

      <select
        name="categoryId"
        value={formData.categoryId ?? ""}   // null → ""
        onChange={handleChange}
        className="p-2 border rounded"
        required
      >
        <option value="">انتخاب دسته‌بندی</option>
        {data_category?.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="author"
        placeholder="نام نویسنده"
        value={formData.author}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
      >
        {stateValue.type === "edit" ? "ویرایش مقاله" : "افزودن مقاله"}
      </button>
    </form>
  );
};

export default AddArticle_form;
