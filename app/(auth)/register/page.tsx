'use client'
import React, { useState } from 'react'
import { TextField, Button, InputAdornment } from '@mui/material'
import { PersonOutline, EmailOutlined, LockOutlined } from '@mui/icons-material'
import { register_user_service } from '@/services/auth/register_user_service'
import { useRouter } from 'next/navigation'

export type user_register_type = {
    username: string
    email: string
    password: string
    role: string
}

const RegisterPage = () => {
    const router = useRouter()

    const [formData, setFormData] = useState<user_register_type>({
        username: '',
        email: '',
        password: '',
        role: 'user',
    })

    const handleChange = (field: keyof user_register_type) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({ ...formData, [field]: event.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('اطلاعات ثبت‌نام:', formData)

        try {
            const res = await register_user_service(formData)
            console.log('پاسخ سرور:', res)

            if (res?.message === 'کاربر با موفقیت ثبت شد') {
                router.push('/login')
            } else {
                alert(res?.message || 'خطایی رخ داده است')
            }
        } catch (error) {
            console.error('خطا در ثبت‌نام:', error)
            alert('ثبت‌نام با خطا مواجه شد. لطفاً دوباره تلاش کنید.')
        }
    }

    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 min-h-screen">
            <div className="bg-white/30 shadow-xl backdrop-blur-md p-10 border border-white/40 rounded-2xl w-full max-w-md hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-purple-500 shadow-md p-3 rounded-full text-white">
                        <PersonOutline fontSize="medium" />
                    </div>
                    <h2 className="mt-4 font-extrabold text-gray-800 text-3xl">ثبت‌نام</h2>
                    <p className="mt-1 text-gray-600 text-sm">
                        برای ساخت حساب جدید اطلاعات زیر را وارد کنید.
                    </p>
                </div>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <TextField
                        sx={{ my: 1 }}
                        label="نام کاربری"
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.username}
                        onChange={handleChange('username')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutline />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        sx={{ my: 1 }}
                        label="ایمیل"
                        variant="outlined"
                        fullWidth
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange('email')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        sx={{ my: 1 }}
                        label="رمز عبور"
                        variant="outlined"
                        fullWidth
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange('password')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        className="!bg-gradient-to-r !from-purple-500 hover:!from-purple-600 !to-indigo-500 hover:!to-indigo-600 py-2 font-semibold text-white"
                    >
                        ثبت‌نام
                    </Button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-700 text-sm">
                        قبلاً ثبت‌نام کرده‌اید؟{' '}
                        <a href="/login" className="font-medium text-indigo-600 hover:underline">
                            وارد شوید
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage