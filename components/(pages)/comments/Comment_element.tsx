import React from 'react'
import CommentSection_byId from './CommentSection_byId'
import { commentsType } from '@/types/comments'
import { getCommentsByArticleId } from '@/services/fetch/comments'

const Comment_element = async ({ comments }: { comments: commentsType[] }) => {

    return (
        <div className="shadow-lg mt-8 p-6 rounded-xl card">

            <h2 className="mb-6 pb-4 border-white/10 border-b font-semibold text-purple-100 text-2xl">
                نظرات
            </h2>

            <div className="space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="hover:bg-white/5 p-4 border border-white/10 rounded-lg transition-colors">
                        <div className="flex items-start space-x-3 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                <div className="flex justify-center items-center bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 border border-white/10 rounded-full w-10 h-10">
                                    <span className="font-semibold text-purple-300">
                                        {comment.author.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                                    <span className="font-semibold text-purple-100">{comment.author}</span>
                                    <span className="text-purple-300/60 text-sm">
                                        {new Date(comment.createdAt).toLocaleDateString('fa-IR')}
                                    </span>
                                </div>
                                <p className="text-purple-100/90">{comment.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comment_element