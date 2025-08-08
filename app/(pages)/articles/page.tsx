import { getAllArticles } from '@/services/articles'
import { getAllComments } from '@/services/comments'
import { articleType } from '@/types/services/articles'
import { commentsType } from '@/types/services/comments'
import Header_HOC from '@/components/common/HOC/Header_HOC'
import MainArticlesList from './_partials/MainArticlesList'
import CommentsSection from './_partials/CommentsSection'
import Page_HOC from '@/components/common/HOC/Page_HOC'
import CommentSection_getAll from '@/components/(pages)/comments/CommentSection_getAll'

const ArticlesPage = async () => {


    const articles: articleType[] = await getAllArticles()



    return (
        <div>
            {/* Header */}
            <Header_HOC title="مقالات" subtitle="مجموعه مقالات شما" />


            <Page_HOC>
                <MainArticlesList articles={articles} />
                <CommentSection_getAll />
            </Page_HOC>


        </div>
    )
}

export default ArticlesPage
