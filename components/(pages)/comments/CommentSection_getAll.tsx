import { getAllComments } from '@/services/comments'
import React from 'react'
import { commentsType } from '@/types/services/comments'
import Comment_element from './Comment_element'

const CommentSection_getAll = async () => {

    const comments: commentsType[] = await getAllComments()


    return (
        <Comment_element comments={comments} />
    )
}

export default CommentSection_getAll