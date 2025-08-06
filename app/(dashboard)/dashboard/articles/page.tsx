'use client';
import ArticleIcon from '@mui/icons-material/Article';

const fakeArticles = [
  { id: 1, title: 'آموزش Next.js', author: 'علی رضایی', views: 120 },
  { id: 2, title: 'مقدمه‌ای بر React', author: 'مریم محمدی', views: 95 },
  { id: 3, title: 'ترفندهای جاوااسکریپت', author: 'حسین کریمی', views: 80 },
  { id: 4, title: 'آشنایی با TypeScript', author: 'سارا احمدی', views: 110 },
  { id: 5, title: 'بهترین کتابخانه‌های UI', author: 'رضا موسوی', views: 75 },
  { id: 6, title: 'آموزش Tailwind CSS', author: 'نگار شریفی', views: 130 },
  { id: 7, title: 'مفاهیم پیشرفته React', author: 'محمد عباسی', views: 90 },
  { id: 8, title: 'آشنایی با Node.js', author: 'الهام قاسمی', views: 60 },
  { id: 9, title: 'آموزش Git و GitHub', author: 'کامران صادقی', views: 105 },
  { id: 10, title: 'تست نویسی در جاوااسکریپت', author: 'فرزانه مرادی', views: 85 },
];

export default function ArticlesPage() {
  return (
    <div className="bg-white shadow p-6 border border-gray-100 rounded-lg">
      <div className="flex items-center gap-2 mb-6">
        <ArticleIcon className="bg-green-100 p-1 rounded-full text-green-600 text-2xl" />
        <h2 className="font-bold text-green-800 text-lg">لیست مقالات</h2>
      </div>
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-green-50 text-green-800">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">عنوان</th>
            <th className="px-4 py-2">نویسنده</th>
            <th className="px-4 py-2">بازدید</th>
          </tr>
        </thead>
        <tbody>
          {fakeArticles.map((article, idx) => (
            <tr key={article.id} className="hover:bg-green-50 border-b">
              <td className="px-4 py-2 font-bold text-green-700">{idx + 1}</td>
              <td className="px-4 py-2 text-gray-800">{article.title}</td>
              <td className="px-4 py-2 text-gray-600">{article.author}</td>
              <td className="px-4 py-2 font-semibold text-green-700">{article.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}