"use client";

import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"; // آیکون متریال یوآی

const DataNotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center py-16 text-center">
            {/* آیکون */}
            <div className="bg-red-100 mb-4 p-6 rounded-full">
                <ErrorOutlineIcon className="!text-red-500" sx={{ fontSize: 48 }} />
            </div>

            {/* متن اصلی */}
            <h2 className="font-bold text-gray-700 text-xl">
                اطلاعاتی یافت نشد ❌
            </h2>

            {/* توضیح */}
            <p className="mt-2 max-w-sm text-gray-500">
                داده‌ای برای نمایش وجود ندارد. لطفاً بعداً دوباره امتحان کنید.
            </p>

            {/* دکمه تلاش مجدد */}
            <button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 shadow mt-6 px-5 py-2 rounded-xl text-white transition"
            >
                تلاش مجدد
            </button>
        </div>
    );
};

export default DataNotFound;
