import { categoriesType } from "@/types/services/categories";
import { ServerUrl } from "@/services/server";


export const getAllCategories = async (): Promise<categoriesType[]> => {
    try {
        const res = await fetch(`${ServerUrl}/categories`, { next: { revalidate: 28800 } }); // هر 8 ساعت یکبار
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)

        const data = await res.json();
        return data as categoriesType[];

    } catch (error) {
        console.error("Error fetching all articles:", error);
        return [];
    }
}




export const getAllCategoriesById = async (id: string): Promise<categoriesType | null> => {
    try {
        const res = await fetch(`${ServerUrl}/categories/${id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data as categoriesType;
    } catch (error) {
        console.error(`Error fetching article with id ${id}:`, error);
        return null;
    }
}
