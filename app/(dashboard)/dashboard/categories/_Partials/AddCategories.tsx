"use client";

import React, { useState } from "react";
import { AddcategoriesType } from "@/types/services/categories";
import CategoryIcon from "@mui/icons-material/Category"; // آیکون متریال
import DescriptionIcon from "@mui/icons-material/Description";
import { AddArticle } from "@/services/fetch/articles";

const AddCategories = () => {
    const [formData, setFormData] = useState<AddcategoriesType>({
        title: "",
        description: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("📂 ارسال دسته‌بندی:", formData);


        const res = await (formData, data)

        console.log("پاسخ سرور برا یافزودن دسته بندی", res);
        // اینجا میتونی تابع AddCategory API رو صدا بزنی
        // await AddCategory(formData, token);
    };

    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6 min-h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg p-1 rounded-2xl w-full max-w-md"
            >
                <h2 className="mb-6 font-bold text-gray-800 text-2xl text-center">
                    ➕ افزودن دسته‌بندی جدید
                </h2>

                {/* فیلد عنوان */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">عنوان</label>
                    <div className="flex items-center bg-gray-50 px-3 border rounded-lg">
                        <CategoryIcon className="text-gray-400" />
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="مثلاً: تکنولوژی"
                            className="bg-transparent p-2 border-0 focus:outline-none w-full"
                            required
                        />
                    </div>
                </div>

                {/* فیلد توضیحات */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">توضیحات</label>
                    <div className="flex items-start bg-gray-50 px-3 border rounded-lg">
                        <DescriptionIcon className="mt-2 text-gray-400" />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="توضیحی کوتاه درباره دسته‌بندی"
                            className="bg-transparent p-2 border-0 focus:outline-none w-full"
                            rows={3}
                            required
                        />
                    </div>
                </div>

                {/* دکمه ثبت */}
                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 shadow px-5 py-2 rounded-xl w-full font-medium text-white transition"
                >
                    ثبت دسته‌بندی
                </button>
            </form>
        </div>
    );
};

export default AddCategories;
