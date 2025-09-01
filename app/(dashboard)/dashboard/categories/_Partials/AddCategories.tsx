"use client";

import React, { useState } from "react";
import { AddcategoriesType, categoriesType } from "@/types/services/categories";
import CategoryIcon from "@mui/icons-material/Category"; // آیکون متریال
import DescriptionIcon from "@mui/icons-material/Description";
import { AddCategory } from "@/services/fetch/categories";

const AddCategories = ({ setOpenDialog, handleFreshData }:
    {
        setOpenDialog: (value: boolean) => void
        handleFreshData: (value: categoriesType) => void
    }) => {


    const [formData, setFormData] = useState<AddcategoriesType>({ title: "", description: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const token = localStorage.getItem('token_myweblog');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("📂 ارسال دسته‌بندی:", formData);
        if (!token) {
            console.log("مشکل در افزودن دسته بندی");
            return false
        }
        const res = await AddCategory(formData, token)
        if (res !== null) {
            handleFreshData(res);
        }
        setOpenDialog(false)
        console.log("پاسخ سرور برا یافزودن دسته بندی", res);

    };

    return (
        <div className="flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl p-3 rounded-2xl w-full"
            >

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
