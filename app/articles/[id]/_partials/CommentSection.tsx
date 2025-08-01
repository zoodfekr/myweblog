import React from 'react'
import { commentsType } from '@/types/services/comments'
import AddCommentForm from './AddCommentForm'
import CommentsList from './CommentsList'

interface CommentSectionProps {
    initialComments: commentsType[]
    articleId: string
}

const CommentSection = ({ initialComments, articleId }: CommentSectionProps) => {
    return (
        <>
            <AddCommentForm onSubmit={() => {}} />
            <CommentsList comments={initialComments} />
        </>
    )
}

export default CommentSection