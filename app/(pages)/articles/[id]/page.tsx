
import React from 'react'
import { getAllArticles, GetArticlesById } from '@/services/fetch/articles'
import ArticleContent from './_partials/ArticleContent'
import Page_HOC from '@/components/common/HOC/Page_HOC'
import Header_HOC from '@/components/common/HOC/Header_HOC'
import Preloader_Error from '@/components/common/Preloader_Error'
import NotFound_Data from '@/components/common/NotFound_Data'
import CommentSection_byId from '@/components/(pages)/comments/CommentSection_byId'
import AddCommentForm from '@/components/(pages)/comments/AddCommentForm'


// این فانکشن فقط سمت سرور و در زمان build اجرا میشه
export async function generateStaticParams() {
    const articles = await getAllArticles();
    if (!Array.isArray(articles)) return [];
    return articles.map(article => ({ id: article.id.toString() }));
}

export const revalidate = 60; // هر 8 ساعت یکبار آپدیت

const SingleArticlePage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    try {
        const articleData = await GetArticlesById({ id })

        if (!articleData) return <NotFound_Data />

        return (
            <div className="min-h-screen">
                <Header_HOC title='مقاله' subtitle='مشاهده و مطالعه مقاله' />
                {/* Main Content */}
                <Page_HOC>
                    <ArticleContent article={articleData} />
                    <CommentSection_byId articleData={articleData} />
                    <AddCommentForm postId={id} article={articleData} />
                </Page_HOC>
            </div >
        )


    } catch (error) {
        console.log(error)
        return (
            <Preloader_Error />
        )
    }
}

export default SingleArticlePage
