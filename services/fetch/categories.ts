import { AddcategoriesType, categoriesType } from "@/types/services/categories";
import { ServerUrl } from "@/services/server";
import { promises } from "dns";

// دریافت تمام دسته بندی ها
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

// افزودن دسته بندی
export const AddCategory = async (article: AddcategoriesType, token: string): Promise<categoriesType | null> => {
    try {
        const res = await fetch(`${ServerUrl}/categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
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

// ویرایش دسته بندی
export const editCategory = async (article: categoriesType, token: string): Promise<categoriesType | null> => {
    try {
        const res = await fetch(`${ServerUrl}/categories/${article.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
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


// دریافت یک دسته بندی با ایدی
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


// حذف دسته بندی
export const deleteCategory = async ({ id, token }: { id: string, token: string }): Promise<{ message: string, status: number }> => {
    try {
        const res = await fetch(`${ServerUrl}/categories/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });

        const data = await res.json();

        return {
            status: res.status,
            message: data.message
        };
    } catch (error) {
        console.error("Error deleting category:", error);
        return {
            status: 500,
            message: 'خطا در حذف دسته بندی'
        };
    }
};
