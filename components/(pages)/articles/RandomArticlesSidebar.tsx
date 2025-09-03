import React from 'react'
import Image from 'next/image'
import { articleType } from '@/types/articles'
import { ServerUrl_media } from '@/services/server'
import { Button } from '@mui/material'
import Link from 'next/link'

interface RandomArticlesSidebarProps {
    randomArticles: articleType[]
}

const RandomArticlesSidebar = ({ randomArticles }: RandomArticlesSidebarProps) => {


    
    return (
        <div className="top-8 sticky bg-white shadow-lg p-6 rounded-xl">
            <h3 className="mb-6 pb-4 border-gray-200 border-b font-semibold text-gray-800 text-xl">
                مقالات تصادفی
            </h3>

            <div className="space-y-4">
                {randomArticles.map((article) => (
                    <div key={article.id} className="hover:shadow-md p-4 border border-gray-200 rounded-lg transition-shadow">
                        {article.image && (
                            <div className="mb-3">
                                <Image
                                    src={`${ServerUrl_media}${article.image}`}
                                    alt={article.title}
                                    width={200}
                                    height={120}
                                    className="rounded-lg w-full object-cover"
                                />
                            </div>
                        )}
                        <h4 className="mb-2 font-semibold text-gray-900 hover:text-indigo-600 line-clamp-2 transition-colors">
                            {article.title}
                        </h4>
                        <p className="mb-2 text-gray-600 text-sm line-clamp-3">
                            {article.content.substring(0, 100)}...
                        </p>
                        <div className="flex justify-between items-center text-gray-500 text-xs">
                            <span>{article.author}</span>
                            <span>{new Date(article.createdAt).toLocaleDateString('fa-IR')}</span>
                        </div>


                        <div className='flex justify-center mt-4'>
                            <Button variant="contained" color="success">
                                <Link href={`/articles/${article.id}`}>
                                    مشاهده مقاله
                                </Link>
                            </Button>
                        </div>

                    </div>
                ))}
            </div>
        </div >
    )
}

export default RandomArticlesSidebar