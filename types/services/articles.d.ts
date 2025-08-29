export type articleType = {
    id: string,
    title: string,
    content: string,
    image: string,
    categoryId: string,
    author: string,
    views: number,
    createdAt: string // or Date if you want to use Date
}



export type AddArticleTyle = {
    id: string,
    title: string,
    content: string,
    image: string,
    categoryId: string,
    author: string,
    createdAt: string
}