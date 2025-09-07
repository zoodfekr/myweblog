import { UsersType } from "@/types/users";
import { ServerUrl } from "../server";

export const getAllUsers = async ({ token }: { token?: string }): Promise<UsersType[]> => {
    const res = await fetch(`${ServerUrl}/comments/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}), // فقط وقتی توکن بود
        },
    });

    if (!res.ok) {
        throw new Error(`خطا در دریافت کاربران: ${res.status}`);
    }

    return await res.json();
};
