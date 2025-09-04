import { ServerUrl } from "@/services/server";
import { ErrorResponseType, LoginParams, LoginResponse, RegisterParams, RegisterResponse, UserInfo } from "@/types/register";

// ثبت نام کاربر
export const register_user_service = async (params: RegisterParams): Promise<RegisterResponse | ErrorResponseType> => {
    try {
        const response = await fetch(`${ServerUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        const data = await response.json();

        if (response.ok) return data as RegisterResponse;
        else return { status: response.status, message: data.message }

    } catch (error) {
        console.error('خطا در ثبت‌نام:', error)
        throw error
    }
}

// ورود کاربرّ
export const login_user_service = async (params: LoginParams): Promise<LoginResponse | ErrorResponseType> => {
    try {
        const response = await fetch(`${ServerUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params),
        });
        const data = await response.json();
        if (response.ok) return data as LoginResponse;
        else return { status: response.status, message: data.message }
    } catch (error) {
        console.error('خطا در ورود:', error);
        throw error;
    }
};


// دریافت اطلاعات کاربر
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


// چک کننده نقش ادمین کاربر
export const UserIsAdmin = async ({ token }: { token: string }): Promise<boolean> => {
    try {
        const res = await fetch(`${ServerUrl}/auth/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        if (!res.ok) return false;
        const data: UserInfo = await res.json();
        return data.role === "admin";
    } catch (err) {
        console.error(err);
        return false;
    }
};
