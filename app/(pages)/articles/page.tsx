import { getAllArticles } from "@/services/fetch/articles";
import Header_HOC from "@/components/common/HOC/Header_HOC";
import MainArticlesList from "./_partials/MainArticlesList";
import Page_HOC from "@/components/common/HOC/Page_HOC";
import CommentSection_getAll from "@/components/(pages)/comments/CommentSection_getAll";
import { getAllComments } from "@/services/fetch/comments";
import { commentsType } from "@/types/comments";


export const revalidate = 120  // به روز رسانی دیتا بعد از 120 ثانیه

interface ArticlesPageProps {
  searchParams: { page?: string }
}

const ArticlesPage = async ({ searchParams }: ArticlesPageProps) => {
  const currentPage = parseInt(searchParams.page || '1');
  const articlesPerPage = 8;

  // Use client-side pagination for now
  const allArticles = await getAllArticles({ revalidate: 120 });
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = allArticles.slice(startIndex, endIndex);
  
  const result_article = {
    articles: paginatedArticles,
    totalPages: Math.ceil(allArticles.length / articlesPerPage),
    currentPage: currentPage,
    totalArticles: allArticles.length
  };

  const result_comments: commentsType[] = await getAllComments()

  // Ensure we have the expected structure
  const articles = Array.isArray(result_article.articles) ? result_article.articles : [];
  const totalPages = typeof result_article.totalPages === 'number' ? result_article.totalPages : 1;
  const currentPageNum = typeof result_article.currentPage === 'number' ? result_article.currentPage : currentPage;

  return (
    <div>
      {/* Header */}
      <Header_HOC title="مقالات" subtitle="مجموعه مقالات شما" />
      <Page_HOC>
        {/* Debug info - remove in production */}
        <div className="bg-blue-900/20 mb-4 p-3 rounded-lg text-blue-200 text-sm">
          <p>صفحه فعلی: {currentPageNum} از {totalPages}</p>
          <p>تعداد مقالات: {articles.length} از {result_article.totalArticles}</p>
          <p>شروع: {startIndex + 1} - پایان: {Math.min(endIndex, result_article.totalArticles)}</p>
        </div>
        
        <MainArticlesList 
          articles={articles} 
          totalPages={totalPages}
          currentPage={currentPageNum}
        />
        <CommentSection_getAll data={result_comments} />
      </Page_HOC>
    </div>
  );
};

export default ArticlesPage;
