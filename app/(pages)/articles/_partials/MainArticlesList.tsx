import React from 'react'
import Image from 'next/image'
import { articleType } from '@/types/articles'
import { ServerUrl_media } from '@/services/server'
import Link from 'next/link'
import { Button } from '@mui/material'
import ShinyText from '@/components/common/ui_components/ShinyText/ShinyText'

interface MainArticlesListProps {
    articles: articleType[]
}

const MainArticlesList = ({ articles }: MainArticlesListProps) => {
    return (
        <div className="shadow-lg p-6 border border-white/10 rounded-xl card">
            <h2 className="mb-6 pb-4 border-white/10 border-b font-semibold text-purple-100 text-2xl">
                تمام مقالات
            </h2>

            <div className="space-y-6">
                {articles.map((article) => (
                    <article key={article.id} className="hover:bg-white/5 hover:shadow-fuchsia-900 p-2 border border-white/10 rounded-lg hover:scale-103 transition-all duration-300">
                        <div className="flex items-start space-x-1 rtl:space-x-reverse">
                            {article.image && (


                                <div className="flex flex-shrink-0 justify-center items-center pl-2">
                                    <Image
                                        src={`${ServerUrl_media}${article.image}`}
                                        alt={article.title}
                                        width={200}
                                        height={80}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                            )}

                            <div className="flex-1 min-w-0">
                                <ShinyText
                                    text={article.title}
                                    disabled={false}
                                    speed={3}
                                    className='mb-2 font-semibold text-purple-100 hover:text-purple-300 text-xl transition-colors'
                                />
                                <p className="mb-3 text-purple-200/80 text-sm text-justify line-clamp-3">
                                    {article.content.substring(0, 200)}...
                                </p>
                                <div className="flex justify-between items-center text-purple-300/70 text-sm">
                                    <span>نویسنده: {article.author}</span>
                                    <span>{new Date(article.createdAt).toLocaleDateString('fa-IR')}</span>
                                </div>
                            </div>

                            <Button variant="contained" color="primary">
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