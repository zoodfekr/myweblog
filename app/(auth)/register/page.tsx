"use client";
import React, { useState } from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import {
  PersonOutline,
  EmailOutlined,
  LockOutlined,
} from "@mui/icons-material";
import { register_user_service } from "@/services/fetch/auth_service";
import { useRouter } from "next/navigation";
import useSnack from "@/hooks/useSnack";

export type user_register_type = {
  username: string;
  email: string;
  password: string;
  role: string;
};

const RegisterPage = () => {

  const router = useRouter();
  const snack = useSnack();

  const [formData, setFormData] = useState<user_register_type>({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (field: keyof user_register_type) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: event.target.value });
    };






  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("اطلاعات ثبت‌نام:", formData);

    try {
      const res = await register_user_service(formData);

      if ("status" in res) {
        snack({ text: res.message, variant: 'error' })
      } else {
        router.push("/login");
        snack({ text: "ثبت نام موفق", variant: 'success' })
      }
    } catch (error) {
      // console.error('خطا در ثبت‌نام:', error.response.data.message)
      alert(error ?? "ثبت‌نام با خطا مواجه شد. لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <div className="flex justify-center items-center px-4 min-h-screen">
      <div className="bg-white/5 shadow-lg backdrop-blur-md p-8 border border-white/10 rounded-2xl w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-purple-600/90 shadow-md p-3 rounded-full text-white">
            <PersonOutline fontSize="medium" />
          </div>
          <h2 className="mt-4 font-extrabold text-stone-200 text-3xl">ثبت‌نام</h2>
          <p className="mt-1 text-stone-300/80 text-sm">برای ساخت حساب جدید اطلاعات زیر را وارد کنید.</p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <TextField
            sx={{ my: 1, '& .MuiOutlinedInput-root': { color: '#e7e5e4' }, '& .MuiInputLabel-root': { color: '#cbd5e1' }, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.2)' } }}
            label="نام کاربری"
            variant="outlined"
            fullWidth
            required
            value={formData.username}
            onChange={handleChange("username")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ my: 1, '& .MuiOutlinedInput-root': { color: '#e7e5e4' }, '& .MuiInputLabel-root': { color: '#cbd5e1' }, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.2)' } }}
            label="ایمیل"
            variant="outlined"
            fullWidth
            type="email"
            required
            value={formData.email}
            onChange={handleChange("email")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ my: 1, '& .MuiOutlinedInput-root': { color: '#e7e5e4' }, '& .MuiInputLabel-root': { color: '#cbd5e1' }, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.2)' } }}
            label="رمز عبور"
            variant="outlined"
            fullWidth
            type="password"
            required
            value={formData.password}
            onChange={handleChange("password")}
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
            className="!bg-gradient-to-r !from-purple-600 hover:!from-purple-700 !to-indigo-600 hover:!to-indigo-700 py-2 font-semibold text-white"
          >
            ثبت‌نام
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-stone-300 text-sm">
            قبلاً ثبت‌نام کرده‌اید؟{" "}
            <a
              href="/login"
              className="font-medium text-indigo-300 hover:underline"
            >
              وارد شوید
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
