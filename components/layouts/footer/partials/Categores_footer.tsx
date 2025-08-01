import { getAllCategories } from '@/services/categories'
import Link from 'next/link'
import React from 'react'

const Categores_footer = async () => {
    const categories_vallue = await getAllCategories()

    return (
        <div className='flex flex-col'>
            {categories_vallue &&
                categories_vallue.map((value) => (

                    <Link
                        key={value.id}
                        href={`categories/${value.id}`}
                        className="flex items-center gap-2 bg-gray-200/50 hover:bg-gray-700 hover:shadow-md px-3 py-2 rounded-xl hover:text-white transition-all duration-200"
                    >
                        <span className="truncate">{value.title}</span>
                    </Link>

                ))}
        </div>
    )
}

export default Categores_footer
