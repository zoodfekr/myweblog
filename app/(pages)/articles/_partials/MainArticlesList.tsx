import React from 'react'
import Image from 'next/image'
import { articleType } from '@/types/articles'
import { ServerUrl_media } from '@/services/server'
import Link from 'next/link'
import { Button } from '@mui/material'

interface MainArticlesListProps {
    articles: articleType[]
}

const MainArticlesList = ({ articles }: MainArticlesListProps) => {
    return (
        <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="mb-6 pb-4 border-gray-200 border-b font-semibold text-gray-800 text-2xl">
                تمام مقالات
            </h2>

            <div className="space-y-6">
                {articles.map((article) => (
                    <article key={article.id} className="hover:shadow-md p-6 border border-gray-200 rounded-lg transition-shadow duration-300">
                        <div className="flex items-start space-x-4 rtl:space-x-reverse">
                            {article.image && (
                                <div className="flex flex-shrink-0 justify-center items-center">
                                    <Image
                                        src={`${ServerUrl_media}${article.image}`}
                                        alt={article.title}
                                        width={120}
                                        height={80}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                            )}

                            <div className="flex-1 min-w-0">
                                <h3 className="mb-2 font-semibold text-gray-900 hover:text-indigo-600 text-xl transition-colors">
                                    {article.title}
                                </h3>
                                <p className="mb-3 text-gray-600 text-sm line-clamp-3">
                                    {article.content.substring(0, 200)}...
                                </p>
                                <div className="flex justify-between items-center text-gray-500 text-sm">
                                    <span>نویسنده: {article.author}</span>
                                    <span>{new Date(article.createdAt).toLocaleDateString('fa-IR')}</span>
                                </div>
                            </div>

                            <Button variant="contained" color="success">
                                <Link href={`/articles/${article.id}`}>
                                    مشاهده مقاله
                                </Link>
                            </Button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default MainArticlesList