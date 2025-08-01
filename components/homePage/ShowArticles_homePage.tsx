import { ServerUrl_media } from '@/services/server'
import { articleType } from '@/types/services/articles'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ShowArticles_homePage = ({ data }: { data: articleType[] }) => {
    return (
        <div className="mx-auto p-4 container">
            <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {data.slice(0, 6).map((article: articleType) => (
                    <div
                        key={article.id}
                        className="group flex flex-col bg-white shadow-lg hover:shadow-xl backdrop-blur-md border border-gray-200 rounded-3xl overflow-hidden hover:scale-[1.01] transition-all hover:-translate-y-1 duration-300 transform"
                    >
                        <div className="relative w-full h-52 overflow-hidden">
                            <Image
                                src={`${ServerUrl_media}${article.image}`}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col flex-1 space-y-4 p-6">
                            <h2 className="font-extrabold text-slate-800 text-xl line-clamp-2 tracking-tight">
                                {article.title}
                            </h2>
                            <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                                {article.content?.slice(0, 100) || 'خلاصه‌ای موجود نیست.'}
                                {article.content && article.content.length > 100 && '...'}
                            </p>
                            <div className="flex justify-between items-center text-slate-400 text-xs">
                                <span>✍️ نویسنده: {article.author}</span>
                                <span>{new Date(article.createdAt).toLocaleDateString('fa-IR')}</span>
                            </div>

                            <Link
                                href={`/articles/${article.id}`}
                                className="inline-block bg-gradient-to-r from-green-500 hover:from-green-600 via-green-500 to-green-500 hover:to-green-600 shadow px-5 py-2 rounded-xl font-semibold text-white text-sm text-center transition-all"
                            >
                                ادامه مطلب
                            </Link>
                        </div>
                    </div>
                ))}

                <div className="flex justify-center items-center">
                    <Button variant="contained" color="primary">
                        <Link href="/articles">مشاهده همه مقالات</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ShowArticles_homePage