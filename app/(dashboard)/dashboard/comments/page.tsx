'use client';

import convertToJalali from '@/components/common/functions/convertToJalali';
import DataNotFound from '@/components/common/statusPages/DataNotFound';
import IsError_status from '@/components/common/statusPages/IsError_status';
import IsLoading_status from '@/components/common/statusPages/IsLoading_status';
import { useFetchData } from '@/hooks/useFetchData';
import { getAllComments } from '@/services/fetch/comments';
import { commentsType } from '@/types/comments';
import CommentIcon from '@mui/icons-material/Comment';



export default function CommentsPage() {


  const { data, loading, error, setData } = useFetchData<commentsType[]>({ fetchFunction: getAllComments })



  // ? بخش محتوا
  if (loading) (<IsLoading_status />)
  if (error) (<IsError_status />)
  if (!data || data.length === 0 && !loading) return <DataNotFound />

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
          </tr>
        </thead>
        <tbody>
          {data.map((comment, idx) => (
            <tr key={comment.id} className="hover:bg-yellow-50 border-b">
              <td className="px-4 py-2 font-bold text-yellow-700">{idx + 1}</td>
              <td className="px-4 py-2 font-semibold text-yellow-700">{comment.articleId}</td>
              <td className="px-4 py-2 text-gray-800">{comment.author}</td>
              <td className="px-4 py-2 text-gray-600">{comment.content}</td>
              <td className="px-4 py-2 font-semibold text-yellow-700">{convertToJalali(comment.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}