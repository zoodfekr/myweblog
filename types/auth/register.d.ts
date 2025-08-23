export type user_register_type = {
    username: string,
    email: string,
    password: string,
    role: string
}

export type RegisterResponse = {
    message: string;
    user: UserInfo;
}