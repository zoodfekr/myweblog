import React, { useState } from 'react'

interface AddCommentFormProps {
    onSubmit: (comment: { content: string; author: string; userId: string }) => void
}

const AddCommentForm = ({ onSubmit }: AddCommentFormProps) => {
    const [newComment, setNewComment] = useState({
        content: '',
        author: '',
        userId: '1' // Default user ID
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newComment.content.trim() || !newComment.author.trim()) {
            alert('لطفاً تمام فیلدها را پر کنید')
            return
        }

        onSubmit(newComment)
        setNewComment({ content: '', author: '', userId: '1' })
    }

    return (
        <div className="bg-white shadow-lg mb-8 p-6 rounded-xl">
            <h2 className="mb-6 pb-4 border-gray-200 border-b font-semibold text-gray-800 text-2xl">
                افزودن نظر
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="author" className="block mb-2 font-medium text-gray-700 text-sm">
                        نام شما
                    </label>
                    <input
                        type="text"
                        id="author"
                        value={newComment.author}
                        onChange={(e) => setNewComment(prev => ({ ...prev, author: e.target.value }))}
                        className="px-3 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-indigo-500 w-full"
                        placeholder="نام خود را وارد کنید"
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="content" className="block mb-2 font-medium text-gray-700 text-sm">
                        نظر شما
                    </label>
                    <textarea
                        id="content"
                        value={newComment.content}
                        onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
                        rows={4}
                        className="px-3 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-indigo-500 w-full"
                        placeholder="نظر خود را بنویسید..."
                        required
                    />
                </div>
                
                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg w-full font-medium text-white transition-colors"
                >
                    ثبت نظر
                </button>
            </form>
        </div>
    )
}

export default AddCommentForm