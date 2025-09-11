import { AddcategoriesType, categoriesType } from "@/types/categories";
import { ServerUrl } from "@/services/server";

// دریافت تمام دسته بندی ها
export const getAllCategories = async (args?: { token?: string , revalidate?: number, cache?: RequestCache, headers?: { "Content-Type": string, Authorization: string } } | undefined): Promise<categoriesType[]> => {
    try {
        const res = await fetch(`${ServerUrl}/categories`,
            {
                cache: args?.cache ?? 'default',
                next: args?.revalidate
                    ? { revalidate: args.revalidate }
                    : undefined,
                headers: args?.headers ?? {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${args?.token}`,
                },
            }
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)

        const data = await res.json();
        return data as categoriesType[];

    } catch (error) {
        console.error("Error fetching all articles:", error);
        return [];
    }
}

// افزودن دسته بندی
export const AddCategory = async (article: AddcategoriesType, args?: { token?: string , headers?: { "Content-Type": string, Authorization: string } } | undefined): Promise<categoriesType | null> => {
    try {
        const res = await fetch(`${ServerUrl}/categories`, {
            method: "POST",
            headers: args?.headers ?? {
                "Content-Type": "application/json",
                Authorization: `Bearer ${args?.token}`,
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
export const editCategory = async (article: categoriesType, args?: { token?: string , headers?: { "Content-Type": string, Authorization: string } } | undefined): Promise<categoriesType | null> => {
    try {
        const res = await fetch(`${ServerUrl}/categories/${article.id}`, {
            method: "PUT",
            headers: args?.headers ?? {
                "Content-Type": "application/json",
                Authorization: `Bearer ${args?.token}`,
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
export const getAllCategoriesById = async (id: string, args?: { token?: string , headers?: { "Content-Type": string, Authorization: string } , revalidate?: number, cache?: RequestCache } | undefined): Promise<categoriesType | null> => {
    try {
        const res = await fetch(`${ServerUrl}/categories/${id}`, {
            headers: args?.headers ?? {
                "Content-Type": "application/json",
                Authorization: `Bearer ${args?.token}`,
            },
        });
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
export const deleteCategory = async ({ id, args }: { id: string, args?: { token?: string , headers?: { "Content-Type": string, Authorization: string } } | undefined }): Promise<{ message: string, status: number }> => {
    try {
        const res = await fetch(`${ServerUrl}/categories/${id}`, {
            method: "DELETE",
            headers: args?.headers ?? {
                "Content-Type": "application/json",
                Authorization: `Bearer ${args?.token}`,
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
