export type UsersType = {
    id: string;
    username: string; // تغییر از username به name
    email: string;
    role: 'user' | "admin"; // مقادیر فارسی مطابق با کد موجود
    createdAt: string; // یا Date اگر سمت سرور تبدیل می‌کنی
}
