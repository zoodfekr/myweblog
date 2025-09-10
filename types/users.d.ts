export type userRoleType = "admin" | "user";

// ـابع تغییر نقش کاربر
export type changeUserFunctionType = {
    id: string;
    role: userRoleType;
    newRole: userRoleType;
}

//  نوع کاربران
export type UsersType = {
    id: string;
    username: string; // تغییر از username به name
    email: string;
    role: userRoleType; // مقادیر فارسی مطابق با کد موجود
    createdAt: string; // یا Date اگر سمت سرور تبدیل می‌کنی
}

// کاربران برای سوییچ
export type Switch_userRole_btnType = {
    id: string;
    role: userRoleType;
    onChange_function: (params: changeUserFunctionType) => void;
};


export type changeUserRoleResponseType = {
    message: string;
    user: UsersType;
}