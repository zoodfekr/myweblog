import { getAllCategories } from '@/services/fetch/categories'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import codeBg from '@/public/icons/codeBg.png'
import eye from '@/public/icons/eye.png'
import { categoriesType } from '@/types/categories'



const Categories = async ({ data }: { data: categoriesType[] }) => {




    return (
        <section className="mt-4 py-12">
            <div className="mx-auto px-4 max-w-7xl text-center">
                <h2 className="bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 mb-10 font-extrabold text-transparent text-3xl md:text-4xl">
                    دسته‌بندی مقالات علمی و آموزشی
                </h2>
                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {data.slice(0, 6).map((cat, index) => (
                        <div
                            key={index}
                            className="relative hover:bg-white/5 shadow-lg hover:shadow-purple-900/40 p-6 border border-white/10 rounded-xl transition duration-300 card"
                        >
                            <div className='-top-8 -right-5 absolute'>
                                <Image
                                    src={codeBg}
                                    alt=''
                                    width={80}
                                    height={80}
                                    className="opacity-70 rounded-lg object-cover"
                                />
                            </div>
                            <h3 className="mb-2 font-semibold text-purple-100 text-xl">{cat.title}</h3>
                            <p className="text-purple-200/80 text-sm leading-6">{cat.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Button variant='contained' color='primary' sx={{ mt: 4, borderRadius: 3, textTransform: 'none', fontWeight: 'bold' }}>
                <Link href={'/categories'} className='flex justify-center items-center gap-4 text-white'>
                    <Image
                        src={eye}
                        alt=''
                        width={30}
                        height={30}
                        className="rounded-lg object-cover"
                    />
                    مشاهده همه </Link >
            </Button>
        </section>
    )
}

export default Categories

