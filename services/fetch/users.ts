import { UsersType } from "@/types/users";
import { ServerUrl } from "../server";

// دریافت همه کاربران
export const getAllUsers = async (args?: { token?: string }): Promise<UsersType[]> => {
    const { token } = args || {};
    const res = await fetch(`${ServerUrl}/auth/users`, {
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


// دریافت کاربر بر اساس شناسه