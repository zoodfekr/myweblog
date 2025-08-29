
import React from 'react'
import { GetArticlesById } from '@/services/fetch/articles'
import ArticleContent from './_partials/ArticleContent'
import Page_HOC from '@/components/common/HOC/Page_HOC'
import Header_HOC from '@/components/common/HOC/Header_HOC'
import Preloader_Error from '@/components/common/Preloader_Error'
import NotFound_Data from '@/components/common/NotFound_Data'
import CommentSection_byId from '@/components/(pages)/comments/CommentSection_byId'
import AddCommentForm from '@/components/(pages)/comments/AddCommentForm'



const SingleArticlePage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;


    try {
        const articleData = await GetArticlesById({ id, options: { revalidate: 28800, cache: 'force-cache' } })

        if (!articleData) return <NotFound_Data />

        return (
            <div className="min-h-screen">
                <Header_HOC title='مقاله' subtitle='مشاهده و مطالعه مقاله' />
                {/* Main Content */}
                <Page_HOC>
                    <ArticleContent article={articleData} />
                    <CommentSection_byId articleData={articleData} />
                    <AddCommentForm ></AddCommentForm>
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
