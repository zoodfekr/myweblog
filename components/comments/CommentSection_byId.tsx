import { getAllComments, getCommentsByArticleId } from '@/services/comments'
import { commentsType } from '@/types/services/comments'
import React from 'react'
import Comment_element from './Comment_element'
import { articleType } from '@/types/services/articles'

const CommentSection_byId = async ({ articleData }: { articleData: articleType }) => {

    const comments: commentsType[] = await getAllComments()

    const commentByid = comments.filter(val => val.articleId == articleData.id)


    return (
        <Comment_element comments={commentByid} />
    )
}

export default CommentSection_byId