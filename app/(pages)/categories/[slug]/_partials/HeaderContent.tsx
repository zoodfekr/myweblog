import React from 'react'

const HeaderContent = ({
    title,
    description
}: {
    title: string
    description: string
}) => {
    return (
        <div className="relative bg-gradient-to-br from-[#0b0713] via-[#120c22] to-[#0b0713] min-h-[50vh] overflow-hidden">


            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="top-10 left-10 absolute bg-purple-700/30 blur-3xl rounded-full w-96 h-96"></div>
                <div className="top-0 right-0 absolute bg-fuchsia-600/30 blur-3xl rounded-full w-96 h-96"></div>
                <div className="-bottom-8 left-20 absolute bg-violet-700/30 blur-3xl rounded-full w-96 h-96"></div>
            </div>



            {/* Content */}
            <div className="z-10 relative flex flex-col justify-center items-center px-4 min-h-[50vh] text-center">
                <div className="mb-8">
                    <div className="flex justify-center items-center bg-gradient-to-br from-purple-600 to-fuchsia-600 shadow-2xl mx-auto mb-6 rounded-2xl w-20 h-20">
                        <svg
                            className="w-10 h-10 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                </div>
                <h1 className="bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 mb-6 font-extrabold text-transparent text-4xl md:text-6xl">
                    {title}
                </h1>
                <p className="max-w-3xl text-purple-200/80 text-xl md:text-2xl leading-relaxed">
                    {description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm mt-8 px-6 py-3 border border-white/20 rounded-full">
                    <svg
                        className="w-5 h-5 text-purple-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-purple-100">دسته‌بندی فعال</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderContent