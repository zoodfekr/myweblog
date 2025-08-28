import { ServerUrl } from "@/services/server";
import { LoginParams, LoginResponse, RegisterParams, RegisterResponse, UserInfo } from "@/types/auth/register";


export const register_user_service = async (params: RegisterParams): Promise<RegisterResponse> => {
    try {
        const response = await fetch(`${ServerUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data as RegisterResponse;
    } catch (error) {
        console.error('خطا در ثبت‌نام:', error)
        throw error
    }
}

export const login_user_service = async (params: LoginParams): Promise<LoginResponse> => {
    try {
        const response = await fetch(`${ServerUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data as LoginResponse;
    } catch (error) {
        console.error('خطا در ورود:', error);
        throw error;
    }
};

export const getUserInfoService = async () => {
    const token = localStorage.getItem('token_myweblog');
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
