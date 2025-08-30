import { AddcategoriesType, categoriesType } from "@/types/services/categories";
import { ServerUrl } from "@/services/server";


export const getAllCategories = async (options?: { revalidate: number, cache: RequestCache }): Promise<categoriesType[]> => {
    try {
        const res = await fetch(`${ServerUrl}/categories`,
            {
                next: options?.revalidate ? { revalidate: options.revalidate } : undefined,
                cache: options?.cache ?? 'default'
            }
        ); // هر 8 ساعت یکبار
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)

        const data = await res.json();
        return data as categoriesType[];

    } catch (error) {
        console.error("Error fetching all articles:", error);
        return [];
    }
}


export const Add = async (article: AddcategoriesType, token: string): Promise<AddcategoriesType | null> => {
    try {
        const res = await fetch(`${ServerUrl}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(article),
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data as categoriesType;
    } catch (error) {
        console.error("Error creating article:", error);
        return null;
    }
};




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
