import React from 'react'
import CommentSection_getAll from '@/components/(pages)/comments/CommentSection_getAll'
import Header_HOC from '@/components/common/HOC/Header_HOC'

const CommentsPage = async () => {
    return (
        <div className="space-y-6">
            <div className="text-center">
        
                <Header_HOC title="آخرین دیدگاه کاربران" subtitle=" دیدگاه‌های ثبت‌شده توسط کاربران وبلاگ" />

            </div>

            <CommentSection_getAll />
        </div>
    )
}

export default CommentsPage


