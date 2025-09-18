import React from 'react'
import CommentSection_getAll from '@/components/(pages)/comments/CommentSection_getAll'
import Header_HOC from '@/components/common/HOC/Header_HOC'
import { commentsType } from '@/types/comments'
import { getAllComments } from '@/services/fetch/comments'

const CommentsPage = async () => {

    const result_comments: commentsType[] = await getAllComments()



    return (
        <div className="space-y-6">
            <div className="text-center">

                <Header_HOC title="آخرین دیدگاه کاربران" subtitle=" دیدگاه‌های ثبت‌شده توسط کاربران وبلاگ" />

            </div>

            <CommentSection_getAll data={result_comments} />
        </div>
    )
}

export default CommentsPage


