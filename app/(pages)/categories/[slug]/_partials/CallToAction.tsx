import React from 'react'

const CallToAction = () => {
    return (
        <div className="text-center">
            <div className="bg-gradient-to-br from-purple-900 to-fuchsia-900 shadow-2xl p-8 md:p-12 rounded-3xl text-white">
                <div className="flex justify-center items-center bg-white/20 mx-auto mb-6 rounded-2xl w-16 h-16">
                    <svg
                        className="w-8 h-8 text-white"
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
                <h3 className="mb-4 font-bold text-2xl md:text-3xl">
                    آماده شروع هستید؟
                </h3>
                <p className="opacity-90 mx-auto mb-8 max-w-2xl text-lg">
                    مقالات ما را کاوش کنید و دانش خود را در زمینه 
                    گسترش دهید
                </p>
                <button className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 shadow-lg px-8 py-4 rounded-2xl font-bold text-green-600 hover:scale-105 transition-all duration-300 transform">
                    <span>شروع کاوش</span>
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CallToAction