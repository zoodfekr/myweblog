import React from 'react'
import { getAllArticles } from '@/services/articles/articles'
import { articleType } from '@/types/services/articles'
import { ServerUrl_media } from '@/services/server'
import Image from 'next/image'
import banner from '@/public/image/banner.jpg'

const Page = async () => {
    const articles = await getAllArticles()
    const firstSix = articles.slice(0, 6)

    return (
        <div className="bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen">
            {/* بنر سایت */}
            <div className="relative flex flex-col justify-center items-center shadow-lg mb-12 rounded-b-3xl w-full h-72 md:h-96 overflow-hidden">
                <Image
                    src={banner}
                    alt="بنر سایت"
                    fill
                    className="w-full h-full object-cover"
                    priority
                />
                {/* گرادینت ملایم و شفاف روی تصویر */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-purple-400/30" />
                <div className="z-10 absolute flex flex-col justify-center items-center w-full h-full">
                    <h1 className="drop-shadow-xl mb-4 font-extrabold text-white text-4xl md:text-6xl text-center">وبلاگ من</h1>
                    <p className="opacity-95 font-medium text-white text-lg md:text-2xl text-center">به دنیای مقالات جذاب خوش آمدید!</p>
                </div>
            </div>

            {/* لیست مقالات */}
            <div className="mx-auto p-4 container">
                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {firstSix.map((article: articleType) => (
                        <div
                            key={article.id}
                            className="group flex flex-col bg-white shadow-xl hover:shadow-2xl border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300"
                        >
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image
                                    src={`${ServerUrl_media}${article.image}`}
                                    alt={article.title}
                                    fill
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="flex flex-col flex-1 p-5">
                                <h2 className="mb-2 font-bold text-gray-800 text-lg line-clamp-2">{article.title}</h2>
                                <p className="mb-4 text-gray-600 text-sm line-clamp-3">
                                    {article.content?.slice(0, 100) || 'خلاصه‌ای موجود نیست.'}
                                    {article.content && article.content.length > 100 && '...'}
                                </p>
                                <div className="flex justify-between items-center mb-4 text-gray-400 text-xs">
                                    <span>نویسنده: {article.author}</span>
                                    <span>{new Date(article.createdAt).toLocaleDateString('fa-IR')}</span>
                                </div>
                                <a
                                    href={`/articles/${article.id}`}
                                    className="inline-block bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-500 hover:to-purple-600 shadow mt-auto px-4 py-2 rounded-lg font-semibold text-white text-sm transition-all"
                                >
                                    ادامه مطلب
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page