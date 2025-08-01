
import React from 'react'
import { GetArticlesById, getAllArticles } from '@/services/articles'
import { getCommentsByArticleId } from '@/services/comments'
import { articleType } from '@/types/services/articles'
import { commentsType } from '@/types/services/comments'
import ArticleContent from './_partials/ArticleContent'
import CommentSection from './_partials/CommentSection'
import RelatedArticles from './_partials/RelatedArticles'

interface PageProps {
    params: Promise<{ id: string }>
}

const SingleArticlePage = async ({ params }: PageProps) => {


    const { id } = await params

    try {
        // Fetch data on the server
        const [articleData, allArticlesData] = await Promise.all([
            GetArticlesById(id),
            getAllArticles()
        ])

        if (!articleData) {
            return (
                <div className="flex justify-center items-center bg-gradient-to-r from-purple-100 to-pink-100 h-screen">
                    <p className="font-semibold text-red-600 text-xl animate-pulse">
                        مقاله‌ای یافت نشد ❌
                    </p>
                </div>
            )
        }

        // Get comments for this article using articleId from articleData
        const articleComments = await getCommentsByArticleId(articleData.id)

        // Create random articles (excluding current article)
        const otherArticles = allArticlesData.filter(a => a.id !== id)
        const shuffled = otherArticles.sort(() => 0.5 - Math.random())
        const randomArticles = shuffled.slice(0, 3)

        return (
            <div className="min-h-screen">
                {/* Header */}
                <div className="bg-white shadow-lg">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
                        <div className="text-center">
                            <h1 className="mb-2 font-bold text-gray-900 text-3xl">مقاله</h1>
                            <p className="text-gray-600 text-lg">مشاهده و مطالعه مقاله</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
                    <div className="gap-8 grid grid-cols-1 lg:grid-cols-4">
                        {/* Main Article Content */}
                        <div className="lg:col-span-3">
                            <ArticleContent article={articleData} />
                            {/* <CommentSection initialComments={articleComments} articleId={articleData.id} /> */}
                        </div>

                        {/* Sidebar - Random Articles */}
                        <div className="lg:col-span-1">
                            <RelatedArticles randomArticles={randomArticles} />
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.error('Error fetching data:', error)
        return (
            <div className="flex justify-center items-center bg-gradient-to-r from-red-100 to-pink-100 h-screen">
                <p className="font-semibold text-red-600 text-xl animate-pulse">
                    خطا در بارگذاری مقاله ❌
                </p>
            </div>
        )
    }
}

export default SingleArticlePage
