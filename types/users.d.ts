export type UsersType = {
    id: string;
    username: string;
    email: string;
    role: "user" | "admin"; // می‌تونی مقادیر مجاز رو محدود کنی
    createdAt: string; // یا Date اگر سمت سرور تبدیل می‌کنی
}
