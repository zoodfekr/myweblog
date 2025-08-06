'use client';
import CommentIcon from '@mui/icons-material/Comment';

const fakeComments = [
  { id: 1, user: 'علی رضایی', content: 'مقاله بسیار خوبی بود!', article: 'آموزش Next.js' },
  { id: 2, user: 'مریم محمدی', content: 'خیلی مفید بود، ممنون.', article: 'مقدمه‌ای بر React' },
  { id: 3, user: 'حسین کریمی', content: 'عالی بود!', article: 'ترفندهای جاوااسکریپت' },
  { id: 4, user: 'سارا احمدی', content: 'خیلی کاربردی بود.', article: 'آشنایی با TypeScript' },
  { id: 5, user: 'رضا موسوی', content: 'عالی توضیح دادید.', article: 'بهترین کتابخانه‌های UI' },
  { id: 6, user: 'نگار شریفی', content: 'خیلی خوب بود.', article: 'آموزش Tailwind CSS' },
  { id: 7, user: 'محمد عباسی', content: 'ممنون از آموزش.', article: 'مفاهیم پیشرفته React' },
  { id: 8, user: 'الهام قاسمی', content: 'ساده و روان توضیح دادید.', article: 'آشنایی با Node.js' },
  { id: 9, user: 'کامران صادقی', content: 'خیلی مفید بود.', article: 'آموزش Git و GitHub' },
  { id: 10, user: 'فرزانه مرادی', content: 'تست نویسی عالی بود.', article: 'تست نویسی در جاوااسکریپت' },
];

export default function CommentsPage() {
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
            <th className="px-4 py-2">کاربر</th>
            <th className="px-4 py-2">نظر</th>
            <th className="px-4 py-2">مقاله</th>
          </tr>
        </thead>
        <tbody>
          {fakeComments.map((comment, idx) => (
            <tr key={comment.id} className="hover:bg-yellow-50 border-b">
              <td className="px-4 py-2 font-bold text-yellow-700">{idx + 1}</td>
              <td className="px-4 py-2 text-gray-800">{comment.user}</td>
              <td className="px-4 py-2 text-gray-600">{comment.content}</td>
              <td className="px-4 py-2 font-semibold text-yellow-700">{comment.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}