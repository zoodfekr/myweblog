import { getAllCategoriesById } from '@/services/categories'
import React from 'react'

const Page = async ({ params }: { params: { slug: string } }) => {


    const category = await getAllCategoriesById(params.slug)


    if (!category) return (<p>مقاله ای موجود نیست </p>)
        
    return (
        <div className="mx-auto px-4 py-12 max-w-4xl">
            <div className="bg-gradient-to-tr from-gray-800 to-gray-700 shadow-2xl p-8 rounded-3xl text-white">
                <h1 className="mb-4 font-bold text-yellow-400 text-4xl">{category.title}</h1>
                <p className="text-gray-200 text-lg leading-7">{category.description}</p>
            </div>
        </div>
    )
}

export default Page
