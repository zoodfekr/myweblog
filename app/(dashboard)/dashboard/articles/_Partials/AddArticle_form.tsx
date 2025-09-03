"use client";

import { AddArticle } from "@/services/fetch/articles";
import React, { useState } from "react";

type ArticleFormType = {
  title: string;
  content: string;
  image: string;
  categoryId: string;
  author: string;
};

const AddArticle_form = () => {
  
  const [formData, setFormData] = useState<ArticleFormType>({
    title: "",
    content: "",
    image: "",
    categoryId: "",
    author: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ارسال مقاله:", formData);

    const token = localStorage.getItem('token_myweblog');

    const res = await AddArticle(formData, token)

    console.log('پاسخ سرور', res);

    // مثال ارسال به API
    // fetch("/api/articles", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
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
