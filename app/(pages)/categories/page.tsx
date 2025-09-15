import Header_HOC from '@/components/common/HOC/Header_HOC'
import CurvedLoop from '@/components/common/ui_components/CurvedLoop/CurvedLoop'
import { getAllCategories } from '@/services/fetch/categories'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
    const categories = await getAllCategories()

    // Array of beautiful gradient colors for categories - Purple theme
    const gradientColors = [
        'from-purple-600 via-fuchsia-600 to-purple-500',
        'from-fuchsia-500 via-purple-600 to-violet-600',
        'from-violet-500 via-fuchsia-600 to-purple-700',
        'from-purple-500 via-violet-600 to-fuchsia-500',
        'from-fuchsia-600 via-purple-700 to-violet-700',
        'from-purple-700 via-fuchsia-600 to-purple-500',
        'from-violet-600 via-purple-600 to-fuchsia-600',
        'from-purple-600 via-violet-600 to-fuchsia-500',
        'from-fuchsia-500 via-purple-700 to-violet-600',
    ]

    // Array of Material UI icons (using SVG paths)
    const icons = [
        'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
        'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
        'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
        'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
        'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
    ]

    return (
        <>
            {/* Hero Section with Animated Background */}
            <div className="relative bg-gradient-to-br from-[#0b0713] via-[#120c22] to-[#0b0713] overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="top-10 left-10 absolute bg-purple-700/30 blur-3xl rounded-full w-72 h-72 animate-blob mix-blend-screen"></div>
                    <div className="top-0 right-0 absolute bg-fuchsia-600/30 blur-3xl rounded-full w-72 h-72 animate-blob animation-delay-2000 mix-blend-screen"></div>
                    <div className="-bottom-8 left-20 absolute bg-violet-700/30 blur-3xl rounded-full w-72 h-72 animate-blob animation-delay-4000 mix-blend-screen"></div>
                </div>

                {/* Content */}
                <Header_HOC title="  دسته بندی ها" subtitle=" کاوش کنید و مقالات مورد علاقه خود را در دسته بندی های مختلف پیدا کنید" />


                {/* <div className="z-10 relative flex flex-col justify-center items-center px-4 min-h-[40vh] text-center">
                    <h1 className="bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 mb-6 font-extrabold text-transparent text-5xl md:text-7xl">
                        دسته بندی ها
                    </h1>
                    <p className="max-w-2xl text-purple-200/80 text-xl md:text-2xl leading-relaxed">
                        کاوش کنید و مقالات مورد علاقه خود را در دسته بندی های مختلف پیدا کنید
                    </p>
                </div> */}
            </div>

            {/* Categories Grid */}
            <div className="relative py-20">
                <div className="mx-auto px-4 max-w-7xl">
                    {/* Stats Section */}
                    <div className="mb-16 text-center">
                        <div className="inline-flex justify-center items-center bg-gradient-to-r from-purple-600 to-fuchsia-600 mb-6 p-2 rounded-full">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="mb-4 font-extrabold text-purple-100 text-3xl md:text-4xl">
                            {categories.length} دسته بندی مختلف
                        </h2>
                        <p className="mx-auto max-w-2xl text-purple-300/70 text-lg">
                            هر دسته بندی شامل مقالات تخصصی و کاربردی در زمینه مربوطه می باشد
                        </p>
                    </div>



                    {/* Categories Grid */}
                    <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category, index) => (
                            <div
                                key={category.id}
                                className="group relative hover:bg-white/5 shadow-xl hover:shadow-purple-900/40 border border-white/10 rounded-3xl overflow-hidden transition-all hover:-translate-y-2 duration-500 transform card"
                            >
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                {/* Card Content */}
                                <div className="relative p-8">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d={icons[index % icons.length]} />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-fuchsia-400 mb-4 font-bold text-purple-100 group-hover:text-transparent text-2xl transition-all duration-300">
                                        {category.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mb-6 text-purple-300/80 leading-relaxed transition-colors duration-300">
                                        {category.description.length > 120
                                            ? category.description.slice(0, 120) + '...'
                                            : category.description}
                                    </p>

                                    {/* Action Button */}
                                    <Link
                                        href={`categories/${category.id}`}
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 hover:from-purple-700 to-fuchsia-600 hover:to-fuchsia-700 shadow-lg hover:shadow-xl px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300 transform"
                                    >
                                        <span>مشاهده مقالات</span>
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Link>
                                </div>

                                {/* Decorative Elements */}
                                <div className="top-0 right-0 absolute bg-gradient-to-br from-purple-200/20 to-fuchsia-200/20 opacity-0 group-hover:opacity-20 rounded-full w-32 h-32 transition-opacity -translate-y-16 translate-x-16 duration-500"></div>
                                <div className="bottom-0 left-0 absolute bg-gradient-to-br from-fuchsia-200/20 to-purple-200/20 opacity-0 group-hover:opacity-20 rounded-full w-24 h-24 transition-opacity -translate-x-12 translate-y-12 duration-500"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 hover:from-purple-700 to-fuchsia-600 hover:to-fuchsia-700 shadow-lg hover:shadow-xl px-8 py-4 rounded-2xl font-semibold text-white hover:scale-105 transition-all duration-300 transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>شروع کاوش در مقالات</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
