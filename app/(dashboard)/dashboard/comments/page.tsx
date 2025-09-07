"use client";

import React from "react";
import convertToJalali from "@/components/common/functions/convertToJalali";
import DataNotFound from "@/components/common/statusPages/DataNotFound";
import IsError_status from "@/components/common/statusPages/IsError_status";
import IsLoading_status from "@/components/common/statusPages/IsLoading_status";
import { useFetchData } from "@/hooks/useFetchData";
import { deleteComment, getAllComments } from "@/services/fetch/comments";
import { commentsType } from "@/types/comments";
import CommentIcon from "@mui/icons-material/Comment";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import useSnack from "@/hooks/useSnack";

export default function CommentsPage() {
  const snack = useSnack();

  const { data, loading, error, setData } = useFetchData<commentsType[]>({ fetchFunction: getAllComments });

  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const storedToken = localStorage.getItem("token_myweblog");
    setToken(storedToken);
  }, []);

  // تابع حذف کامنت
  const handleDeleteComment = async (id: string) => {
    const res = await deleteComment({ id, token: token! });
    if (res.status === 200) {
      let newData = data ? data.filter((comment) => comment.id !== id) : [];
      setData(newData);
      snack({ text: res.message, variant: "success" });
    } else {
      snack({ text: res.message, variant: "error" });
    }
  };

  // ? بخش محتوا
  if (loading) <IsLoading_status />;
  if (error) <IsError_status />;
  if ((!data || data.length === 0) && !loading) return <DataNotFound />;

  return (
    <div className="bg-white shadow p-6 border border-gray-100 rounded-lg">
      <div className="flex items-center gap-2 mb-6">
        <CommentIcon className="bg-yellow-100 p-1 rounded-full text-yellow-600 text-2xl" />
        <h2 className="font-bold text-yellow-800 text-lg">لیست نظرات</h2>
      </div>
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-yellow-50 text-yellow-800">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">شناسه</th>
            <th className="px-4 py-2">کاربر</th>
            <th className="px-4 py-2">نظرات</th>
            <th className="px-4 py-2">تاریخ ایجاد</th>
            <th className="px-4 py-2">عملگر</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((comment, idx) => (
              <tr key={comment.id} className="hover:bg-yellow-50 border-b">
                <td className="px-4 py-2 font-bold text-yellow-700">
                  {idx + 1}
                </td>
                <td className="px-4 py-2 font-semibold text-yellow-700">
                  {comment.articleId}
                </td>
                <td className="px-4 py-2 text-gray-800">{comment.author}</td>
                <td className="px-4 py-2 text-gray-600">{comment.content}</td>
                <td className="px-4 py-2 font-semibold text-yellow-700">
                  {convertToJalali(comment.createdAt)}
                </td>
                <td className="px-4 py-2 font-semibold text-yellow-700">
                  <IconButton
                    aria-label=""
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    <DeleteIcon sx={{ fontSize: "15px", color: red[500] }} />
                  </IconButton>{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
