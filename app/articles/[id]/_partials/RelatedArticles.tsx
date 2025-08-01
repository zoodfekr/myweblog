import React from 'react'
import Image from 'next/image'
import { articleType } from '@/types/services/articles'
import { ServerUrl_media } from '@/services/server'

interface RelatedArticlesProps {
    randomArticles: articleType[]
}

const RelatedArticles = ({ randomArticles }: RelatedArticlesProps) => {
    return (
        <div className="top-8 sticky bg-white shadow-lg p-6 rounded-xl">
            <h3 className="mb-6 pb-4 border-gray-200 border-b font-semibold text-gray-800 text-xl">
                مقالات مرتبط
            </h3>

            <div className="space-y-4">
                {randomArticles.map((randomArticle) => (
                    <div key={randomArticle.id} className="hover:shadow-md p-4 border border-gray-200 rounded-lg transition-shadow">
                        {randomArticle.image && (
                            <div className="mb-3">
                                <Image
                                    src={`${ServerUrl_media}${randomArticle.image}`}
                                    alt={randomArticle.title}
                                    width={200}
                                    height={120}
                                    className="rounded-lg w-full object-cover"
                                />
                            </div>
                        )}
                        <h4 className="mb-2 font-semibold text-gray-900 hover:text-indigo-600 line-clamp-2 transition-colors">
                            {randomArticle.title}
                        </h4>
                        <p className="mb-2 text-gray-600 text-sm line-clamp-3">
                            {randomArticle.content.substring(0, 100)}...
                        </p>
                        <div className="flex justify-between items-center text-gray-500 text-xs">
                            <span>{randomArticle.author}</span>
                            <span>{new Date(randomArticle.createdAt).toLocaleDateString('fa-IR')}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedArticles