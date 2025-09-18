import { ServerUrl } from "@/services/server";
import { AddArticleTyle, articleType } from "@/types/articles";
import { ErrorResponseType } from "@/types/register";
import { promises } from "dns";


type CacheOptionType = {
    revalidate?: number;  //isr
    cache?:
    "default"       //ssg
    | "force-cache"   //ssg
    | "no-store";     //ssr
};


//* دریافت تمام مقالات
export const getAllArticles = async (args?: CacheOptionType): Promise<articleType[] | []> => {
    try {
        const res = await fetch(`${ServerUrl}/articles`, {
            ...(args?.revalidate ? { next: { revalidate: args.revalidate } } : {}),
            ...(args?.cache ? { cache: args.cache } : { cache: 'default' }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data as articleType[];
    } catch (error) {
        return []; // به جای پرتاب دوباره خطا، null برگردون چون Promise<articleType | null> تعریف شده

    }
};

// دریافت مقاله با شناسه
export const GetArticlesById = async ({ id, args }: { id: string, args?: CacheOptionType }): Promise<articleType | null> => {
    try {
        const res = await fetch(`${ServerUrl}/articles/${id}`, {
            ...(args?.revalidate ? { next: { revalidate: args.revalidate } } : {}),
            ...(args?.cache ? { cache: args.cache } : { cache: 'default' }),
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data as articleType;
    } catch (error) {
        console.error(`Error fetching article with id ${id}:`, error);
        return null; // به جای پرتاب دوباره خطا، null برگردون چون Promise<articleType | null> تعریف شده
    }
}



// افزودن مقاله
export const AddArticle = async (article: AddArticleTyle, token: string): Promise<AddArticleTyle | ErrorResponseType> => {
    try {
        const res = await fetch(`${ServerUrl}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(article),
        });

        const data = await res.json();

        if (res.ok) {
            return data as AddArticleTyle;
        } else {
            return {
                status: res.status,
                message: data.message
            };
        }

    } catch (error) {
        return {
            status: 500,
            message: 'خطا در حذف دسته بندی'
        };
    }
};

// ویرایش یک مقاله
export const editArticle = async (article: AddArticleTyle, token: string, id: string): Promise<articleType | { message: string, status: number }> => {
    try {
        const res = await fetch(`${ServerUrl}/articles/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(article),
        });
        const data = await res.json();
        if (res.ok) {
            return data as articleType;
        } else {
            return {
                status: res.status,
                message: data.message
            };
        }

    } catch (error) {
        console.error("Error creating article:", error);
        return {
            status: 500,
            message: 'خطا در حذف دسته بندی'
        };
    }
};


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

// آپلود تصویر برای مقاله
export const sendImage = async ({ token, image }: { token: string, image: File }):
    Promise<{ message: string; imagePath: string } | { status: number; message: string }
    > => {
    try {
        const formData = new FormData();
        formData.append("image", image);

        const res = await fetch(`${ServerUrl}/articles/upload`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        const data = await res.json();

        if (res.ok) {
            return data as { message: string; imagePath: string };
        } else {
            return { status: res.status, message: data.message };
        }
    } catch (error) {
        return { status: 500, message: "خطا در انجام عملیات" };
    }
};

// دریافت مقالات مرتبط با دسته بندی خاص
export const GetArticleByCategory = async ({ catId, options }: { catId: string, options?: CacheOptionType }): Promise<articleType[] | { message: string, status: number }> => {
    try {
        const res = await fetch(`${ServerUrl}/categories/${catId}/articles`,
            {
                next: options?.revalidate ? { revalidate: options.revalidate } : undefined,
                cache: options?.cache ?? 'default'
            }
        );
        const data = await res.json();

        if (res.ok) {
            return data as articleType[];
        } else {
            return {
                status: res.status,
                message: data.message
            };
        }
    } catch (error) {
        return {
            status: 500,
            message: 'خطا در دریافت اطلاعات'
        };
    }
}

