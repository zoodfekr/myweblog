import React from 'react'
import Image from 'next/image'
import { articleType } from '@/types/articles'
import { ServerUrl_media } from '@/services/server'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useFetchData } from '@/hooks/useFetchData'

interface RandomArticlesSidebarProps {
    randomArticles: articleType[]
}

const RandomArticlesSidebar = ({ randomArticles }: RandomArticlesSidebarProps) => {

    
    return (
        <div className="top-8 sticky shadow-lg p-6 border border-white/10 rounded-xl card">
            <h3 className="mb-6 pb-4 border-white/10 border-b font-semibold text-purple-100 text-xl">
                مقالات تصادفی
            </h3>

            <div className="space-y-4">
                {randomArticles.map((article) => (
                    <div key={article.id} className="hover:bg-white/5 p-4 border border-white/10 rounded-lg transition-colors">
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
                        <h4 className="mb-2 font-semibold text-purple-100 hover:text-purple-300 line-clamp-2 transition-colors">
                            {article.title}
                        </h4>
                        <p className="mb-2 text-purple-200/80 text-sm line-clamp-3">
                            {article.content.substring(0, 100)}...
                        </p>
                        <div className="flex justify-between items-center text-purple-300/70 text-xs">
                            <span>{article.author}</span>
                            <span>{new Date(article.createdAt).toLocaleDateString('fa-IR')}</span>
                        </div>


                        <div className='flex justify-center mt-4'>
                            <Button variant="contained" color="primary">
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