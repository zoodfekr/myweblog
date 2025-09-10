import { changeUserRoleResponseType, UsersType } from "@/types/users";
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
export const changeUserRole = async ({ id, token, body }: { id: string, token: string, body: 'user' | 'admin' }) => {

    const res = await fetch(`${ServerUrl}/auth/users/${id}/role`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ role: body }),
    });
    const data = await res.json();

    console.log("تغییر نقش کاربر ", data);
    if (res.ok) {
        return data as changeUserRoleResponseType;
    } else {
        return { message: data.message, status: res.status } as { message: string; status: number };
    }

}



// حذف کاربر
export const deleteUser = async ({ id, token }: { id: string, token: string }): Promise<{ message: string, status: number }> => {
    try {
        const res = await fetch(`${ServerUrl}/auth/users/${id}`, {
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
