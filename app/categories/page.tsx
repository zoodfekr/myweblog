import { getAllCategories } from '@/services/categories'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
    const categories_vallue = await getAllCategories()

    return (
        <div className="mx-auto px-4 py-8 max-w-6xl">
            <h1 className="mb-8 font-bold text-white text-3xl">دسته‌بندی‌ها</h1>

            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {categories_vallue.map((category) => (
                    <div
                        key={category.id}
                        className="group bg-gradient-to-tr from-gray-800 hover:from-indigo-700 to-gray-700 hover:to-purple-700 shadow-lg p-6 rounded-2xl text-white hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    >
                        <h2 className="mb-2 font-semibold group-hover:text-yellow-300 text-xl transition-colors duration-200">
                            {category.title}
                        </h2>
                        <p className="text-gray-300 group-hover:text-gray-100 text-sm transition-colors duration-200">
                            {category.description.length > 100
                                ? category.description.slice(0, 100) + '...'
                                : category.description}
                        </p>

                        <Link vocab='contained' href={`categories/${category.id}`}>مشاهده</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page
