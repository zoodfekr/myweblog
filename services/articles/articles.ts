import axios from "axios";
import { ServerUrl } from "../server";
import { articleType } from "@/types/services/articles";



export const getAllArticles = async (): Promise<articleType[]> => {
    try {
        const res = await axios.get(`${ServerUrl}/articles`);
        return res.data as articleType[];
    } catch (error) {
        console.error("Error fetching all articles:", error);
        return [];
    }
}

export const GetArticlesById = async (id: string): Promise<articleType | null> => {
    try {
        const res = await axios.get(`${ServerUrl}/articles/${id}`);
        return res.data as articleType;
    } catch (error) {
        console.error(`Error fetching article with id ${id}:`, error);
        return null;
    }
}



