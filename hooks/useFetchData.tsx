import { useEffect, useState } from 'react';


// تایپ پراپ‌های هوک
export interface UseFetchDataProps<T> { fetchFunction: () => Promise<T> }

// نتیجه‌ای که هوک برمی‌گردونه
export interface UseFetchDataResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    success: boolean;
}


export const useFetchData = <T,>({ fetchFunction }: UseFetchDataProps<T>): UseFetchDataResult<T> => {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await fetchFunction();
                if (result) setSuccess(true);
                setData(result);
            } catch (err: unknown) {
                // safe cast
                setError(err instanceof Error ? err.message : "Unexpected error");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [fetchFunction]);

    return { data, loading, error, success };
};


//   const { data, loading, error } = useFetchData<articleType[]>({ fetchFunction: getAllArticles })
