import React from 'react'
import CommentSection_getAll from '@/components/(pages)/comments/CommentSection_getAll'

const CommentsPage = async () => {
    return (
        <div className="space-y-6">
            <div className="text-center">
                <h1 className="bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 mb-2 font-extrabold text-transparent text-3xl md:text-4xl">
                    همه نظرات کاربران
                </h1>
                <p className="text-purple-200/80">دیدگاه‌های ثبت‌شده توسط کاربران وبلاگ</p>
            </div>

            <CommentSection_getAll />
        </div>
    )
}

export default CommentsPage


