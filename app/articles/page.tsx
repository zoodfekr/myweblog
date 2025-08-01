'use client'

import React, { useEffect, useState } from 'react'
import { getAllArticles } from '@/services/articles'
import { getAllComments } from '@/services/comments'
import { articleType } from '@/types/services/articles'
import { commentsType } from '@/types/services/comments'
import Header from './_partials/Header'
import MainArticlesList from './_partials/MainArticlesList'
import RandomArticlesSidebar from './_partials/RandomArticlesSidebar'
import CommentsSection from './_partials/CommentsSection'

const ArticlesPage = () => {
    const [articles, setArticles] = useState<articleType[]>([])
    const [comments, setComments] = useState<commentsType[]>([])
    const [loading, setLoading] = useState(true)
    const [randomArticles, setRandomArticles] = useState<articleType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [articlesData, commentsData] = await Promise.all([
                    getAllArticles(),
                    getAllComments()
                ])
                setArticles(articlesData)
                setComments(commentsData)

                // Create random articles for sidebar (take 5 random articles)
                const shuffled = [...articlesData].sort(() => 0.5 - Math.random())
                setRandomArticles(shuffled.slice(0, 3))
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
                <div className="text-center">
                    <div className="mx-auto border-indigo-600 border-b-2 rounded-full w-12 h-12 animate-spin"></div>
                    <p className="mt-4 text-gray-600">در حال بارگذاری...</p>
                </div>
            </div>
        )
    }

    return (
        <div >
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
                <div className="gap-8 grid grid-cols-1 lg:grid-cols-4">
                    {/* Main Articles List */}
                    <div className="lg:col-span-3">
                        <MainArticlesList articles={articles} />
                        <CommentsSection comments={comments} />
                    </div>

                    {/* Sidebar - Random Articles */}
                    <div className="lg:col-span-1">
                        <RandomArticlesSidebar randomArticles={randomArticles} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlesPage