"use client";

import React, { useEffect, useState } from "react";
import { categoriesType } from "@/types/services/categories";
import CategoryIcon from "@mui/icons-material/Category"; // آیکون متریال
import DescriptionIcon from "@mui/icons-material/Description";
import { AddCategory, editCategory } from "@/services/fetch/categories";
import { getCookie } from "@/components/common/functions/cookie";
import useSnack from "@/hooks/useSnack";


type AddCategoriesType = {
    setOpenDialog: (value: boolean) => void
    handleFreshData: (value: categoriesType, type: 'add' | 'edit') => void
    stateValue: { status: boolean, type: 'add' | 'edit', value: categoriesType | null }
}


const AddCategories = ({ setOpenDialog, handleFreshData, stateValue }: AddCategoriesType) => {

    const token = getCookie('token_myweblog');
    const snack = useSnack()

    const [formData, setFormData] = useState<categoriesType>({ title: "", description: "", id: '' });

    const handleResetState = () => setFormData({ title: "", description: "", id: '' })

    useEffect(() => {
        if (stateValue.type === 'edit' && stateValue.value != null) setFormData(stateValue.value)
        else handleResetState();
    }, [stateValue])



    // ثبت تغییرات فرم در state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // ارسال دیتا به سرور برای ثبت
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("📂 ارسال دسته‌بندی:", formData);

        if (!token) {
            snack({ text: 'مشکل در افزودن دسته بندی', variant: 'error' });
            return; // فقط return خالی کافیه
        }

        try {
            let res: any = null;

            if (stateValue.type === 'add') {
                res = await AddCategory(formData, token);
            } else if (stateValue.type === 'edit') {
                res = await editCategory(formData, token);
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
