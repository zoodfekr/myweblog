import { getAllComments } from '@/services/fetch/comments'
import React from 'react'
import { commentsType } from '@/types/comments'
import Comment_element from './Comment_element'

const CommentSection_getAll = async ({ data }: { data: commentsType[] }) => {

    return (
        <Comment_element comments={data} />
    )
}

export default CommentSection_getAll