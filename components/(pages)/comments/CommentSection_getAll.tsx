import { getAllComments } from '@/services/fetch/comments'
import React from 'react'
import { commentsType } from '@/types/comments'
import Comment_element from './Comment_element'

const CommentSection_getAll = async () => {

    const comments: commentsType[] = await getAllComments({ revalidate: 28800, cache: 'force-cache' })


    return (
        <Comment_element comments={comments} />
    )
}

export default CommentSection_getAll