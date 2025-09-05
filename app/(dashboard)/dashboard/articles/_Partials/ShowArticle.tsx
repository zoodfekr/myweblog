"use client";

import convertToJalali from "@/components/common/functions/convertToJalali";
import ShowCategoryById from "@/components/common/ShowCategoryById";
import { articleType } from "@/types/articles";
import React from "react";
import {
    FaUser,
    FaFolder,
    FaHeading,
    FaFileAlt,
    FaCalendarAlt,
    FaEye,
    FaHashtag,
} from "react-icons/fa";

const ShowArticle = ({ data }: { data: articleType | null }) => {

    if (!data) return null;

    return (
        <div className="space-y-4 bg-white shadow-lg mx-auto p-6 border rounded-2xl max-w-xl">
            <h2 className="flex items-center gap-2 font-bold text-gray-800 text-xl">
                <FaHeading className="text-blue-600" />
                {data.title}
            </h2>

            <div className="flex items-center gap-2 text-gray-600">
                <FaHashtag className="text-gray-500" />
                <span className="font-medium">شناسه:</span> {data.id}
            </div>

            <div className="flex items-center gap-2 text-gray-600">
                <FaUser className="text-purple-500" />
                <span className="font-medium">نویسنده:</span> {data.author}
            </div>

            <div className="flex items-center gap-2 text-gray-600">
                <FaFolder className="text-green-500" />
                <span className="font-medium">دسته‌بندی:</span>
                <ShowCategoryById id={data.categoryId} />
            </div>

            <div className="flex items-start gap-2 text-gray-600">
                <FaFileAlt className="text-orange-500" />
                <span className="font-medium">محتوا:
                </span> {data.content}
            </div>

            <div className="flex items-center gap-2 text-gray-600">
                <FaCalendarAlt className="text-red-500" />
                <span className="font-medium">تاریخ ایجاد:</span>
                {convertToJalali(data.createdAt)}
            </div>

            <div className="flex items-center gap-2 text-gray-600">
                <FaEye className="text-teal-500" />
                <span className="font-medium">تعداد نمایش:</span> {data.views}
            </div>
        </div>
    );
};

export default ShowArticle;
