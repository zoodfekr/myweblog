'use client'
import React, { useState } from 'react'
import { TextField, Button, InputAdornment } from '@mui/material'
import { LockOutlined, EmailOutlined, PasswordOutlined } from '@mui/icons-material'
import { login_user_service } from '@/services/fetch/auth_service'
import { ErrorResponseType, LoginParams, LoginResponse } from '@/types/register'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import useSnack from '@/hooks/useSnack'

const LoginPage = () => {


    const router = useRouter()
    const { login } = useAuth();
    const snack = useSnack()

    const [formData, setFormData] = useState<LoginParams>({ username: '', password: '' })



    const handleChange = (field: keyof LoginParams) => (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('field', field, event.target.value);
        setFormData({ ...formData, [field]: event.target.value })
    }

    


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res: LoginResponse | ErrorResponseType = await login_user_service(formData)
            if ("token" in res) {
                login(res.token, res.user)
                router.push('/')
            } else {
                snack({ text: res.message, variant: 'error' })
            }
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-200 min-h-screen">
            <div className="bg-white/30 shadow-xl backdrop-blur-md p-10 border border-white/40 rounded-2xl w-full max-w-md hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-indigo-500 shadow-md p-3 rounded-full text-white">
                        <LockOutlined fontSize="medium" />
                    </div>
                    <h2 className="mt-4 font-extrabold text-gray-800 text-3xl">ورود به حساب</h2>
                    <p className="mt-1 text-gray-600 text-sm">خوش برگشتی! لطفاً اطلاعات خود را وارد کنید.</p>
                </div>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <TextField
                        label="نام کاربری"
                        variant="outlined"
                        fullWidth
                        type="username"
                        required
                        sx={{ my: 1 }}
                        onChange={handleChange('username')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="رمز عبور"
                        variant="outlined"
                        fullWidth
                        type="password"
                        required
                        sx={{ my: 1 }}
                        onChange={handleChange('password')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PasswordOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        sx={{ mt: 1 }}
                        variant="contained"
                        fullWidth
                        className="!bg-gradient-to-r !from-indigo-500 hover:!from-indigo-600 !to-purple-500 hover:!to-purple-600 py-2 font-semibold text-white"
                    >
                        ورود
                    </Button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-700 text-sm">
                        حساب کاربری ندارید؟{' '}
                        <a href="/register" className="font-medium text-purple-600 hover:underline">
                            ثبت‌نام کنید
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage