import { ServerUrl } from "@/services/server";
import { articleType } from "@/types/services/articles";


export const getAllArticles = async (): Promise<articleType[]> => {
    try {
        const res = await fetch(`${ServerUrl}/articles`, { next: { revalidate: 28800 } }); // هر 8 ساعت
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data as articleType[];
    } catch (error) {
        console.error("Error fetching all articles:", error);
        return [];
    }
}

export const GetArticlesById = async (id: string): Promise<articleType | null> => {
    try {
        const res = await fetch(`${ServerUrl}/articles/${id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data as articleType;
    } catch (error) {
        console.error(`Error fetching article with id ${id}:`, error);
        return null;
    }
}



