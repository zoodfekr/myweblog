import React from 'react'
import { commentsType } from '@/types/services/comments'

interface CommentsSectionProps {
    comments: commentsType[]
}

const CommentsSection = ({ comments }: CommentsSectionProps) => {
    return (
        <div className="bg-white shadow-lg mt-8 p-6 rounded-xl">
            <h2 className="mb-6 pb-4 border-gray-200 border-b font-semibold text-gray-800 text-2xl">
                نظرات
            </h2>

            <div className="space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="hover:bg-gray-50 p-4 border border-gray-200 rounded-lg transition-colors">
                        <div className="flex items-start space-x-3 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                <div className="flex justify-center items-center bg-indigo-100 rounded-full w-10 h-10">
                                    <span className="font-semibold text-indigo-600">
                                        {comment.author.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                                    <span className="font-semibold text-gray-900">{comment.author}</span>
                                    <span className="text-gray-500 text-sm">
                                        {new Date(comment.createdAt).toLocaleDateString('fa-IR')}
                                    </span>
                                </div>
                                <p className="text-gray-700">{comment.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentsSection