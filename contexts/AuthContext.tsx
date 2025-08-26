'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { UserInfo } from '@/types/auth/register';
import { getUserInfoService } from '@/services/auth_service';

interface AuthContextType {
  user: UserInfo | null;
  isLoading: boolean;
  login: (token: string, user: UserInfo) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // برای ورود کاربر
  const login = (token: string, userData: UserInfo) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token_myweblog', token);
      localStorage.setItem('user_myweblog', JSON.stringify(userData));
      document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60}`; // 7 روز
    }
    setUser(userData);
  };

  // برای خروج کاربر
  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token_myweblog');
      localStorage.removeItem('user_myweblog');
      document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    }
    setUser(null);
  };

  // چک کردن توکن کاربر
  const checkAuth = async () => {
    try {
      // بررسی اینکه آیا در سمت کلاینت هستیم
      if (typeof window === 'undefined') {
        setIsLoading(false);
        return;
      }

      const token = localStorage.getItem('token_myweblog');
      const savedUser = localStorage.getItem('user_myweblog');
      
      if (!token) {
        setIsLoading(false);
        return;
      }

      // ابتدا کاربر ذخیره شده را نمایش دهید (برای جلوگیری از فلیکر)
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser);
          setUser(parsedUser);
        } catch (e) {
          console.error('خطا در پارس کردن اطلاعات کاربر:', e);
        }
      }

      // بررسی اعتبار توکن با سرور
      const userData = await getUserInfoService();
      setUser(userData);
      
      // به‌روزرسانی اطلاعات کاربر در localStorage
      localStorage.setItem('user_myweblog', JSON.stringify(userData));
      
    } catch (error) {
      console.error('خطا در بررسی احراز هویت:', error);
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 