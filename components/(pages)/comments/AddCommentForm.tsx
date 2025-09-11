"use client";
import useSnack from "@/hooks/useSnack";
import { createComment } from "@/services/fetch/comments";
import { articleType } from "@/types/articles";
import { AddcommentsType } from "@/types/comments";
import { UserInfo } from "@/types/register";
import React, { useEffect, useState } from "react";

const AddCommentForm = ({
  postId,
  article,
}: {
  postId: string;
  article: articleType;
}) => {
  const snack = useSnack();

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token_myweblog");
    setToken(storedToken);
  }, []);

  //   state فرم  نظر جدید
  const [newComment, setNewComment] = useState({
    content: "",
    author: "",
    userId: "", // Default user ID
    articleId: article.id,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user_myweblog");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser) as UserInfo;
        if (parsedUser?.id) {
          setNewComment((prev) => ({ ...prev, userId: parsedUser.id }));
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  //   ارسال فرم
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.content.trim() || !newComment.author.trim()) {
      alert("لطفاً تمام فیلدها را پر کنید");
      return;
    }
    console.log(newComment);
    handleSendComment(newComment);
    setNewComment((prev) => ({ ...prev, content: "", author: "" }));
  };

  // تابع افزودن  کامنت 
  const handleSendComment = async (prop: AddcommentsType) => {
    if (!token) {
      alert("لطفاً ابتدا وارد شوید");
      return;
    }
    try {
      const res = await createComment({ body: prop, token: token });
      if ("id" in res)
        snack({ text: "نظر شما با موفقیت ثبت شد", variant: "success" });
      else
        snack({
          text: "خطا در ثبت نظر، لطفاً دوباره تلاش کنید",
          variant: "error",
        });
      console.log("res add com ===>", res);
    } catch (error) {
      console.error("Error sending comment:", error);
    }
  };

  return (
    <div className="shadow-lg mt-8 mb-8 p-6 rounded-xl card">
      <h2 className="mb-6 pb-4 border-white/10 border-b font-semibold text-purple-100 text-2xl">
        افزودن نظر
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="author"
            className="block mb-2 font-medium text-purple-200 text-sm"
          >
            نام شما
          </label>
          <input
            type="text"
            id="author"
            value={newComment.author}
            onChange={(e) =>
              setNewComment((prev) => ({ ...prev, author: e.target.value }))
            }
            className="bg-white/5 px-3 py-2 border border-white/10 focus:border-transparent rounded-lg focus:ring-2 focus:ring-purple-500 w-full text-purple-100 placeholder-purple-200/50"
            placeholder="نام خود را وارد کنید"
            required
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block mb-2 font-medium text-purple-200 text-sm"
          >
            نظر شما
          </label>
          <textarea
            id="content"
            value={newComment.content}
            onChange={(e) =>
              setNewComment((prev) => ({ ...prev, content: e.target.value }))
            }
            rows={4}
            className="bg-white/5 px-3 py-2 border border-white/10 focus:border-transparent rounded-lg focus:ring-2 focus:ring-purple-500 w-full text-purple-100 placeholder-purple-200/50"
            placeholder="نظر خود را بنویسید..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 hover:from-purple-700 to-fuchsia-600 hover:to-fuchsia-700 px-4 py-2 rounded-lg w-full font-medium text-white transition-colors"
        >
          ثبت نظر
        </button>
      </form>
    </div>
  );
};

export default AddCommentForm;
