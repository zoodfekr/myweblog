'use client';
import IsError_status from '@/components/common/statusPages/IsError_status';
import IsLoading_status from '@/components/common/statusPages/IsLoading_status';
import { useFetchData } from '@/hooks/useFetchData';
import { getAllArticles } from '@/services/fetch/articles';
import { articleType } from '@/types/services/articles';
import ArticleIcon from '@mui/icons-material/Article';

const ArticlesPage = () => {

  const { data, loading, error } = useFetchData<articleType[]>({ fetchFunction: getAllArticles })

  if (loading) (<IsLoading_status />)
  if (error) (<IsError_status />)
    

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
          {data && data.map((article, idx) => (
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

export default ArticlesPage;

