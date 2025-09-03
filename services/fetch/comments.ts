import { ServerUrl } from "@/services/server";
import { commentsType } from "@/types/comments";


export const getAllComments = async (): Promise<commentsType[]> => {
    try {
        const res = await fetch(`${ServerUrl}/comments`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data as commentsType[];
    } catch (error) {
        console.error("Error fetching all comments:", error);
        return [];
    }
}

export const getCommentById = async (id: string): Promise<commentsType | null> => {
    try {
        const res = await fetch(`${ServerUrl}/comments/${id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data as commentsType;
    } catch (error) {
        console.error("Error fetching comment by id:", error);
        return null;
    }
}

export const getCommentsByArticleId = async (articleId: string): Promise<commentsType[]> => {
    try {
        const res = await fetch(`${ServerUrl}/comments?articleId=${articleId}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('لیست نظرات دریافت دشه ', data)
        return data as commentsType[];
    } catch (error) {
        console.error("Error fetching comments by article id:", error);
        return [];
    }
}