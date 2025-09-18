import { getAllArticles } from "@/services/fetch/articles";
import { articleType } from "@/types/articles";
import Header_HOC from "@/components/common/HOC/Header_HOC";
import MainArticlesList from "./_partials/MainArticlesList";
import Page_HOC from "@/components/common/HOC/Page_HOC";
import CommentSection_getAll from "@/components/(pages)/comments/CommentSection_getAll";
import { getAllComments } from "@/services/fetch/comments";
import { commentsType } from "@/types/comments";


export const revalidate = 120  // به روز رسانی دیتا بعد از 120 ثانیه

const ArticlesPage = async () => {

  const result_article = await getAllArticles();
  const result_comments: commentsType[] = await getAllComments()

  return (
    <div>
      {/* Header */}
      <Header_HOC title="مقالات" subtitle="مجموعه مقالات شما" />
      <Page_HOC>
        <MainArticlesList articles={result_article} />
        <CommentSection_getAll data={result_comments} />
      </Page_HOC>
    </div>
  );
};

export default ArticlesPage;
