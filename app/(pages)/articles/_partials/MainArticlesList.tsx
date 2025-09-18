import React from 'react'
import Image from 'next/image'
import { articleType } from '@/types/articles'
import { ServerUrl_media } from '@/services/server'
import Link from 'next/link'
import { Button } from '@mui/material'
import ShinyText from '@/components/common/ui_components/ShinyText/ShinyText'
import { MainArticlePaginate } from './MainArticlePaginate'

interface MainArticlesListProps {
    articles: articleType[]
    totalPages: number
    currentPage: number
}

const MainArticlesList = ({ articles, totalPages, currentPage }: MainArticlesListProps) => {
    return (
        <div className="shadow-lg p-3 border border-white/10 rounded-xl card">

            <h2 className="mb-6 pb-4 border-white/10 border-b font-semibold text-purple-100 text-2xl">
                تمام مقالات
            </h2>

            <div className="gap-2 sm:gap-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                    <article
                        key={article.id}
                        className="flex flex-col hover:bg-white/5 hover:shadow-fuchsia-900 p-2 sm:p-3 border border-white/10 rounded-lg hover:scale-[1.03] transition-all duration-300"
                    >
                        {/* تصویر */}
                        {article.image && (
                            <div className="flex justify-center items-center mb-2 sm:mb-3 w-full">
                                <Image
                                    src={`${ServerUrl_media}${article.image}`}
                                    alt={article.title}
                                    width={200}
                                    height={120}
                                    className="rounded-lg w-full h-[100px] sm:h-[150px] object-cover"
                                />
                            </div>
                        )}

                        {/* متن و جزئیات */}
                        <div className="flex flex-col flex-1 min-w-0">
                            <ShinyText
                                text={article.title}
                                disabled={false}
                                speed={3}
                                className="mb-1 sm:mb-2 font-semibold text-purple-100 hover:text-purple-300 text-sm sm:text-base line-clamp-2 transition-colors"
                            />
                            <p className="flex-1 mb-2 sm:mb-3 text-purple-200/80 text-xs sm:text-sm text-justify line-clamp-2 sm:line-clamp-3">
                                {article.content.substring(0, 100)}...
                            </p>
                            <div className="flex flex-col gap-1 text-purple-300/70 text-xs">
                                <span className="truncate">نویسنده: {article.author}</span>
                                <span>{new Date(article.createdAt).toLocaleDateString('fa-IR')}</span>
                            </div>
                        </div>

                        {/* دکمه */}
                        <div className="mt-2 sm:mt-3">
                            <Link href={`/articles/${article.id}`}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="w-full text-xs sm:text-sm"
                                    size="small"
                                >
                                    مشاهده مقاله
                                </Button>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>


            <MainArticlePaginate totalPages={totalPages} currentPage={currentPage} />
        </div>
    )
}

export default MainArticlesList