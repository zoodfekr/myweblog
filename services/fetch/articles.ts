import { ServerUrl } from "@/services/server";
import { articleType } from "@/types/services/articles";


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



