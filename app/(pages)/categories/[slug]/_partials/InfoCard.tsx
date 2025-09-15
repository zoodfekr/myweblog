import React from 'react'

const InfoCard = ({
    title,
    description
}: {
    title: string
    description: string
}) => {
    return (
        <div className="mb-16">
            <div className="shadow-2xl p-8 md:p-12 border border-white/10 rounded-3xl card">
                <div className="flex md:flex-row flex-col items-start md:items-center gap-6 mb-8">
                    <div className="flex justify-center items-center bg-gradient-to-br from-purple-600 to-fuchsia-600 shadow-lg rounded-2xl w-16 h-16">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="mb-2 font-bold text-purple-100 text-3xl md:text-4xl">
                            {title}
                        </h2>
                        <p className="text-purple-300/80 text-lg leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
                    <div className="p-6 border border-white/10 rounded-2xl text-center card">
                        <div className="flex justify-center items-center bg-gradient-to-br from-purple-600 to-fuchsia-600 mx-auto mb-4 rounded-xl w-12 h-12">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 font-semibold text-purple-100">
                            مقالات تخصصی
                        </h3>
                        <p className="text-purple-300/80 text-sm">
                            محتوای با کیفیت و کاربردی
                        </p>
                    </div>

                    <div className="p-6 border border-white/10 rounded-2xl text-center card">
                        <div className="flex justify-center items-center bg-gradient-to-br from-purple-600 to-fuchsia-600 mx-auto mb-4 rounded-xl w-12 h-12">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 font-semibold text-purple-100">
                            به‌روزرسانی مداوم
                        </h3>
                        <p className="text-purple-300/80 text-sm">محتوای جدید و مرتبط</p>
                    </div>

                    <div className="p-6 border border-white/10 rounded-2xl text-center card">
                        <div className="flex justify-center items-center bg-gradient-to-br from-purple-600 to-fuchsia-600 mx-auto mb-4 rounded-xl w-12 h-12">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 font-semibold text-purple-100">
                            آمار و تحلیل
                        </h3>
                        <p className="text-purple-300/80 text-sm">داده‌های دقیق و معتبر</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard