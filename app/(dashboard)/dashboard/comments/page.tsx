"use client";

import React from "react";
import convertToJalali from "@/components/common/functions/convertToJalali";
import DataNotFound from "@/components/common/statusPages/DataNotFound";
import IsError_status from "@/components/common/statusPages/IsError_status";
import IsLoading_status from "@/components/common/statusPages/IsLoading_status";
import DataTable from "@/components/common/dataTable/DataTable";
import { useFetchData } from "@/hooks/useFetchData";
import { deleteComment, getAllComments } from "@/services/fetch/comments";
import { commentsType } from "@/types/comments";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import useSnack from "@/hooks/useSnack";
import { getCookie } from "@/components/common/functions/cookie";

export default function CommentsPage() {
  const snack = useSnack();

  const { data, loading, error, setData } = useFetchData<commentsType[]>({ fetchFunction: getAllComments });

  const [token, setToken] = React.useState<string>("");

  React.useEffect(() => {
    const cookieToken = getCookie("token_myweblog");
    if (cookieToken) setToken(cookieToken);
  }, []);

  // حذف کامنت و تازه‌سازی کش
  const handleDeleteComment = async (id: string) => {
    if (!token) {
      snack({ text: "توکن نامعتبر", variant: "info" });
      return;
    }
    const res = await deleteComment({ id, token });
    if (res.status === 200) {
      const newData = data ? data.filter((comment) => comment.id !== id) : [];
      setData(newData);
      snack({ text: res.message, variant: "success" });
    } else {
      snack({ text: res.message, variant: "error" });
    }
  };

  // ستون‌ها و اکشن‌های جدول
  const columns = [
    { key: "index", header: "#", className: "text-white" },
    { key: "articleId", header: "شناسه مقاله", className: "text-white" },
    { key: "author", header: "کاربر", className: "text-white" },
    { key: "content", header: "نظر", className: "text-white" },
    {
      key: "createdAt",
      header: "تاریخ ایجاد",
      render: (row: commentsType) => convertToJalali(row.createdAt),
      className: "font-semibold text-yellow-700",
    },
  ];

  const actions = [
    {
      label: "حذف",
      icon: <DeleteIcon sx={{ fontSize: "25px", color: red[500] }} />,
      onClick: (row: commentsType) => handleDeleteComment(row.id),
    },
  ];

  // محتوا
  if (loading) return <IsLoading_status />;
  if (error) return <IsError_status />;
  if ((!data || data.length === 0) && !loading) return <DataNotFound />;

  return (
    <div className="bg-transparent">
      <div className="flex items-center gap-2 mb-6">
        <CommentIcon className="bg-yellow-100 p-1 rounded-full text-yellow-600 text-2xl" />
        <h2 className="font-bold text-yellow-800 text-lg">لیست نظرات</h2>
      </div>
      {data && (
        <DataTable
          data={data}
          columns={columns}
          actions={actions}
        />
      )}
    </div>
  );
}
