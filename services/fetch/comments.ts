import { ServerUrl } from "@/services/server";
import { commentsType } from "@/types/comments";
import { promises } from "dns";

// دریافت تمام نظرات
export const getAllComments = async (): Promise<commentsType[]> => {
  try {
    const res = await fetch(`${ServerUrl}/comments`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data as commentsType[];
  } catch (error) {
    console.error("Error fetching all comments:", error);
    return [];
  }
};

// ایجاد نظر جدید
export const createComment = async ({
  body,
  token,
}: {
  body: commentsType;
  token: string;
}): Promise<commentsType | { message: string; status: number }> => {
  try {
    const res = await fetch(`${ServerUrl}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (res.ok) {
      return data as commentsType;
    } else {
      return { message: data.message, status: res.status };
    }
  } catch (error) {
    console.error("Error creating comment:", error);
    return { message: "خطا در انجام عملیات", status: 500 };
  }
};

// دریافت نظر بر اساس آیدی
export const getCommentById = async (
  id: string
): Promise<commentsType | null> => {
  try {
    const res = await fetch(`${ServerUrl}/comments/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data as commentsType;
  } catch (error) {
    console.error("Error fetching comment by id:", error);
    return null;
  }
};

// دریافت نظرات بر اساس آیدی مقاله
export const getCommentsByArticleId = async (
  articleId: string
): Promise<commentsType[]> => {
  try {
    const res = await fetch(`${ServerUrl}/comments?articleId=${articleId}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("لیست نظرات دریافت دشه ", data);
    return data as commentsType[];
  } catch (error) {
    console.error("Error fetching comments by article id:", error);
    return [];
  }
};
