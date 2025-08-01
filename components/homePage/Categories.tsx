import { getAllCategories } from '@/services/categories'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Categories = async () => {


    const categories_vallue = await getAllCategories()


    return (
        <section className="bg-green-200/50 mt-4 p-15" >
            <div className="mx-auto px-4 max-w-7xl text-center">
                <h2 className="mb-10 font-extrabold text-gray-800 text-3xl md:text-4xl">
                    دسته‌بندی مقالات علمی و آموزشی
                </h2>
                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {categories_vallue.slice(0, 6).map((cat, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg hover:shadow-xl p-6 border border-gray-100 hover:border-blue-300 rounded-xl transition duration-300"
                        >
                            <h3 className="mb-2 font-semibold text-gray-700 text-xl">{cat.title}</h3>
                            <p className="text-gray-600 text-sm leading-6">{cat.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Button variant='contained' color='success'>
                <Link href={'/categories'}>مشاهده همه </Link >
            </Button>
        </section>
    )
}

export default Categories