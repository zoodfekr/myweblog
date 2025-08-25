import axios from "axios";
import { ServerUrl } from "./server";
import { RegisterParams, RegisterResponse } from "@/types/auth/register";


export const register_user_service = async (params: RegisterParams): Promise<RegisterResponse> => {
    try {
        const response = await axios.post<RegisterResponse>(
            `${ServerUrl}/auth/register`,
            params,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        return response.data
    } catch (error) {
        console.error('خطا در ثبت‌نام:', error)
        throw error
    }
}

export const login_user_service = async (params: user_register_type): Promise<RegisterResponse> => {
    try {
        const response = await axios.post<RegisterResponse>(
            `${ServerUrl}/auth/login`,
            params,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        return response.data
    } catch (error) {
        console.error('خطا در ثبت‌نام:', error)
        throw error
    }
}


export const getUserInfoService = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${ServerUrl}/auth/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` }),
        },
    });

    if (!res.ok) {
        throw new Error('Failed to get user info');
    }

    const data = await res.json();
    return data as UserInfo;
}
