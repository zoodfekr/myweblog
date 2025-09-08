"use client";

import { useFetchData } from "@/hooks/useFetchData";
import useSnack from "@/hooks/useSnack";
import { AddArticle, editArticle } from "@/services/fetch/articles";
import { getAllCategories } from "@/services/fetch/categories";
import { articleType } from "@/types/articles";
import { categoriesType } from "@/types/categories";
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


  const { data: data_category, loading: loading_category, error: error_category, setData: setDate_category } = useFetchData<categoriesType[]>({ fetchFunction: getAllCategories });


  const snack = useSnack()

  const [formData, setFormData] = useState<ArticleFormType>({
    title: "",
    content: "",
    image: "",
    categoryId: "",
    author: "",
  });

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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    console.log({ name, value });
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      let res: any = null;

      if (stateValue.type === 'add') {
        res = await AddArticle(formData, token)
      } else if (stateValue.type === 'edit') {
        res = await editArticle(formData, token, stateValue.value ? stateValue.value.id : '');
      }

      if (res.status && res.status !== 200 && res.status !== 201) {
        snack({ text: res.message || 'خظا در انجام عملیات', variant: 'error' });
        return;
      } else if (res) {
        handleFreshData(res, stateValue.type);
        handleResetState();
        setOpenDialog();
        console.log("✅ پاسخ سرور برای افزودن/ویرایش دسته بندی:", res);
      }

    } catch (error) {
      console.log('Error submitting article:', error);
      snack({
        text:  'خطا در انجام عملیات',
        variant: 'error'
      });
    }
  };







  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 shadow-md mx-auto p-4 border rounded-xl max-w-md"
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

      <input
        type="text"
        name="image"
        placeholder="آدرس تصویر"
        value={formData.image}
        onChange={handleChange}
        className="p-2 border rounded"
      />

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
