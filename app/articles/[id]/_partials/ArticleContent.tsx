import React from 'react'
import Image from 'next/image'
import { articleType } from '@/types/services/articles'
import { ServerUrl_media } from '@/services/server'

interface ArticleContentProps {
    article: articleType
}

const ArticleContent = ({ article }: ArticleContentProps) => {
    return (
        <div className="bg-white shadow-xl mb-8 border border-gray-200 rounded-3xl overflow-hidden hover:scale-[1.01] transition-transform duration-300">
            {article.image && (
                <Image
                    src={`${ServerUrl_media}${article.image}`}
                    alt={article.title}
                    className="w-full h-64 object-cover"
                    width={800}
                    height={400}
                />
            )}

            <div className="p-8">
                <span className="inline-block bg-indigo-100 mb-4 px-3 py-1 rounded-full font-medium text-indigo-600 text-xs">
                    🏷 دسته: {article.categoryId}
                </span>

                <h1 className="mb-6 font-extrabold text-indigo-700 text-4xl leading-snug">
                    {article.title}
                </h1>

                <section className="mb-6 max-w-none text-gray-800 leading-relaxed prose prose-indigo prose-lg">
                    <p>{article.content}</p>
                </section>

                <div className="flex sm:flex-row flex-col sm:justify-between space-y-1 sm:space-y-0 pt-4 border-gray-200 border-t text-gray-500 text-sm">
                    <span>🖋 نویسنده: {article.author}</span>
                    <span>
                        📅 تاریخ انتشار:{' '}
                        {new Date(article.createdAt).toLocaleDateString('fa-IR')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ArticleContent