import { categoriesType } from "@/types/services/categories";
import { ServerUrl } from "./server";
import axios from "axios";



export const getAllCategories = async (): Promise<categoriesType[]> => {
    try {
        const res = await axios.get(`${ServerUrl}/categories`);
        return res.data as categoriesType[];
    } catch (error) {
        console.error("Error fetching all articles:", error);
        return [];
    }
}

export const getAllCategoriesById = async (id: string): Promise<categoriesType | null> => {
    try {
        const res = await axios.get(`${ServerUrl}/categories/${id}`);
        return res.data as categoriesType;
    } catch (error) {
        console.error(`Error fetching article with id ${id}:`, error);
        return null;
    }
}
