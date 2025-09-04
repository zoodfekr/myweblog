"use client";

import useSnack from "@/hooks/useSnack";
import { AddArticle, editArticle } from "@/services/fetch/articles";
import { articleType } from "@/types/articles";
import React, { useState } from "react";

type ArticleFormType = {
  title: string;
  content: string;
  image: string;
  categoryId: string;
  author: string;
};

type AddArticle_formType = {
  setOpenDialog: (value: boolean) => void
  handleFreshData: (value: articleType, type: 'add' | 'edit') => void
  stateValue: { status: boolean, type: 'add' | 'edit', value: articleType | null }
}

const AddArticle_form = ({ setOpenDialog, handleFreshData, stateValue }: AddArticle_formType) => {


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


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
        res = await editArticle(formData, token)
      }

      if (res) {
        handleFreshData(res, stateValue.type);
        handleResetState();
        setOpenDialog(false);
        console.log("✅ پاسخ سرور برای افزودن/ویرایش دسته بندی:", res);
      }
    } catch (error) {
      console.error("❌ خطا در ارسال دسته‌بندی:", error);
      snack({ text: 'خطا در ارسال دسته‌بندی', variant: 'error' });
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

      <input
        type="text"
        name="categoryId"
        placeholder="شناسه دسته‌بندی"
        value={formData.categoryId}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />

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
        افزودن مقاله
      </button>
    </form>
  );
};

export default AddArticle_form;
