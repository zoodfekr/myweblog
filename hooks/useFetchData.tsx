import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

// پراپ‌های ورودی هوک
export interface UseFetchDataProps<T> {
    fetchFunction: (args?: any) => Promise<T>; // انعطاف‌پذیر برای انواع ورودی‌ها
    token?: string; // توکن اختیاری
}

// خروجی هوک
export interface UseFetchDataResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    success: boolean;
    setData: Dispatch<SetStateAction<T | null>>;
}

export const useFetchData = <T,>({
    fetchFunction,
    token,
}: UseFetchDataProps<T>): UseFetchDataResult<T> => {

    
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // اگر توکن بود، پاس بده؛ اگر نبود، بدون پارامتر صدا بزن
                const result = await fetchFunction(token ? { token } : undefined);

                setData(result);
                setSuccess(true);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Unexpected error");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [token]);

    return { data, loading, error, success, setData };
};
