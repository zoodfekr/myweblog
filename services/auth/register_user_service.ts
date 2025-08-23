import axios from "axios";
import { ServerUrl } from "../server";
import { RegisterResponse, user_register_type } from "@/types/auth/register";


export const register_user_service = async (params: user_register_type): Promise<RegisterResponse> => {
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