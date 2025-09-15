import Header_HOC from "@/components/common/HOC/Header_HOC";
import { getAllCategoriesById } from "@/services/fetch/categories";
import React from "react";
import HeaderContent from "./_partials/HeaderContent";
import InfoCard from "./_partials/InfoCard";
import CallToAction from "./_partials/CallToAction";
import ShowArticleSample from "./_partials/ShowArticleSample";
import NotArticle from "./_partials/NotArticle";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params;
  const category = await getAllCategoriesById(slug, { revalidate: 28800, cache: 'force-cache' });

  if (!category)
    return (
      <NotArticle />
    );

  return (
    <>
      {/* Hero Section */}
      <HeaderContent title={category.title} description={category.description} />

      {/* Main Content */}
      <div className="relative py-20">
        <div className="mx-auto px-4 max-w-6xl">

          {/* Category Info Card */}
          <InfoCard title={category.title} description={category.description} />

          {/* Articles Section */}
          <ShowArticleSample id={slug} />

          {/* Call to Action */}
          <CallToAction />

        </div>
      </div>
    </>
  );
};

export default Page;
