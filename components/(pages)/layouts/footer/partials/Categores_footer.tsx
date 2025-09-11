import { getAllCategories } from '@/services/fetch/categories'
import Link from 'next/link'
import React from 'react'

const Categores_footer = async () => {
    const categories_vallue = await getAllCategories()

    return (
        <div className="flex flex-col gap-3">
            {categories_vallue &&
                categories_vallue.slice(0, 3).map((value) => (
                    <Link
                        key={value.id}
                        href={`categories/${value.id}`}
                        className="group flex justify-between items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200"
                    >
                        <span className="text-gray-200 group-hover:text-white text-sm truncate">
                            {value.title}
                        </span>
                        <span className="text-gray-400 group-hover:text-white text-xs">→</span>
                    </Link>
                ))}
        </div>
    )
}

export default Categores_footer