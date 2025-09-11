import { ServerUrl_media } from '@/services/server'
import { articleType } from '@/types/articles'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ShowArticles_homePage = ({ data }: { data: articleType[] }) => {

    
    return (
        <div className="mx-auto px-2 py-8 container">
            <h1 className="bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 mb-10 font-extrabold text-transparent text-3xl text-center">آخرین مقالات</h1>
            <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {data.slice(0, 6).map((article: articleType) => (
                    <div
                        key={article.id}
                        className="group flex flex-col hover:bg-white/5 hover:shadow-purple-900/40 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform hover:-translate-y-1 duration-300 card"
                    >
                        <div className="relative w-full h-52">
                            {/* <Image
                                src={`${ServerUrl_media}${article.image}`}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            /> */}
                        </div>
                        <div className="flex flex-col flex-1 space-y-3 p-5">
                            <h2 className="font-semibold text-purple-100 text-lg line-clamp-2">{article.title}</h2>
                            <p className="text-purple-200/80 text-sm line-clamp-3">
                                {article.content?.slice(0, 100) || 'خلاصه‌ای موجود نیست.'}
                                {article.content && article.content.length > 100 && '...'}
                            </p>
                            <div className="flex justify-between items-center text-purple-300/70 text-xs">
                                <span>✍️ {article.author}</span>
                                <span>{new Date(article.createdAt).toLocaleDateString('fa-IR')}</span>
                            </div>
                            <Link
                                href={`/articles/${article.id}`}
                                className="inline-block bg-gradient-to-r from-purple-600 hover:from-purple-700 to-fuchsia-600 hover:to-fuchsia-700 mt-auto px-4 py-2 rounded-lg font-medium text-white text-sm text-center transition-all"
                            >
                                ادامه مطلب
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <Link href="/articles">
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            fontWeight: 'bold',
                            paddingX: 4,
                            paddingY: 1.5,
                            borderRadius: '12px',
                            textTransform: 'none',
                        }}
                    >
                        مشاهده همه مقالات
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ShowArticles_homePage