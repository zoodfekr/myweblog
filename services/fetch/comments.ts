import { ServerUrl } from "@/services/server";
import { AddcommentsType, commentsType } from "@/types/comments";



type CacheOptionType = {
  revalidate?: number;  //isr
  cache?:
  "default"       //ssg
  | "force-cache"   //ssg
  | "no-store";     //ssr
};


// دریافت تمام نظرات
export const getAllComments = async (args?: CacheOptionType): Promise<commentsType[] | []> => {
  try {
    const res = await fetch(`${ServerUrl}/comments`, {
      ...(args?.revalidate ? { next: { revalidate: args.revalidate } } : {}),
      ...(args?.cache ? { cache: args.cache } : { cache: 'default' }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
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
  body: AddcommentsType;
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

// حذف نظر بر اساس آیدی
export const deleteComment = async ({
  id,
  token,
}: {
  id: string;
  token: string;
}): Promise<{ message: string; status: number }> => {
  try {
    const res = await fetch(`${ServerUrl}/comments/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (res.ok) {
      return { message: data.message, status: 200 };
    } else {
      return { message: data.message, status: res.status };
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
    return { message: "خطا در انجام عملیات", status: 500 };
  }
};
