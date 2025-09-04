import { ServerUrl } from "@/services/server";
import { AddArticleTyle, articleType } from "@/types/articles";

// دریافت تمام مقالات
export const getAllArticles = async (options?: { revalidate: number, cache: RequestCache }): Promise<articleType[]> => {
    try {
        const res = await fetch(`${ServerUrl}/articles`, {
            next: options?.revalidate ? { revalidate: options.revalidate } : undefined,
            cache: options?.cache ?? 'default'
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        return data as articleType[];
    } catch (error) {
        console.error("Error fetching all articles:", error);
        return [];
    }
}

// افزودن مقاله
export const AddArticle = async (article: AddArticleTyle, token: string): Promise<AddArticleTyle | null> => {
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
        return data as AddArticleTyle;
    } catch (error) {
        console.error("Error creating article:", error);
        return null;
    }
};

// ویرایش یک مقاله
export const editArticle = async (article: AddArticleTyle, token: string): Promise<{ message: string, status: number }> => {
    try {
        const res = await fetch(`${ServerUrl}/articles`, {
            method: "PUT",
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
        return {
            status: res.status,
            message: data.message
        };
    } catch (error) {
        console.error("Error creating article:", error);
        return {
            status: 500,
            message: 'خطا در حذف دسته بندی'
        };
    }
};

// دریافت مقاله با شناسه
export const GetArticlesById = async ({ id, options }: { id: string, options?: { revalidate: number, cache: RequestCache } }): Promise<articleType | null> => {
    try {
        const res = await fetch(`${ServerUrl}/articles/${id}`,
            {
                next: options?.revalidate ? { revalidate: options.revalidate } : undefined,
                cache: options?.cache ?? 'default'
            }
        );
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



// حذف مقاله
export const deleteArticle = async ({ id, token }: { id: string, token: string }): Promise<{ message: string, status: number }> => {
    try {
        const res = await fetch(`${ServerUrl}/articles/${id}`, {
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


