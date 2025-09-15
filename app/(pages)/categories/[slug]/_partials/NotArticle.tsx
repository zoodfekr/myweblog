import React from 'react'

const NotArticle = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-purple-600 to-fuchsia-600 mx-auto mb-6 rounded-full w-24 h-24">
                    <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                    </svg>
                </div>
                <h2 className="mb-2 font-bold text-purple-100 text-2xl">
                    مقاله‌ای موجود نیست
                </h2>
                <p className="text-purple-300/80">دسته‌بندی مورد نظر یافت نشد</p>
            </div>
        </div>
    )
}

export default NotArticle