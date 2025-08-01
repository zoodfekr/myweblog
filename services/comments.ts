import axios from "axios";
import { ServerUrl } from "./server";
import { commentsType } from "@/types/services/comments";


export const getAllComments = async (): Promise<commentsType[]> => {
    try {
        const res = await axios.get(`${ServerUrl}/comments`);
        return res.data as commentsType[];
    } catch (error) {
        console.error("Error fetching all comments:", error);
        return [];
    }
}

export const getCommentById = async (id: string): Promise<commentsType | null> => {
    try {
        const res = await axios.get(`${ServerUrl}/comments/${id}`);
        return res.data as commentsType;
    } catch (error) {
        console.error("Error fetching comment by id:", error);
        return null;
    }
}

export const getCommentsByArticleId = async (articleId: string): Promise<commentsType[]> => {
    try {
        const res = await axios.get(`${ServerUrl}/comments?articleId=${articleId}`);
        console.log('لیست نظرات دریافت دشه ', res.data)
        return res.data as commentsType[];
    } catch (error) {
        console.error("Error fetching comments by article id:", error);
        return [];
    }
}