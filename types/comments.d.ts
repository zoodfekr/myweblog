export type commentsType = {
    id: string,
    content: string,
    articleId: string,
    author: string,
    userId: string,
    createdAt: string
}


export type AddcommentsType = {
    content: string,
    articleId: string,
    author: string,
    userId: string,
}