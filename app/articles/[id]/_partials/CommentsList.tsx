import React from 'react'
import { commentsType } from '@/types/services/comments'
import { getCommentsByArticleId } from '@/services/comments'

interface CommentsListProps {
    comments: commentsType[]
}

const CommentsList = async ({ comments }: CommentsListProps) => {

    // const articleComments = await getCommentsByArticleId(comments.articleId)


    return (
        <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="mb-6 pb-4 border-gray-200 border-b font-semibold text-gray-800 text-2xl">
                نظرات ({comments.length})
            </h2>

            <div className="space-y-4">
                {comments.length === 0 ? (
                    <p className="py-8 text-gray-500 text-center">هنوز نظری ثبت نشده است</p>
                ) : (
                    comments.map((comment) => (
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
                    ))
                )}
            </div>
        </div>
    )
}

export default CommentsList