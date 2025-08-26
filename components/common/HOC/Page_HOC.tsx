import React from "react";
import RandomArticlesSidebar from "../../(pages)/articles/RandomArticlesSidebar";
import { getAllArticles } from "@/services/articles";
import { articleType } from "@/types/services/articles";

const Page_HOC = async ({ children }: { children: React.ReactNode }) => {


    const articles: articleType[] = await getAllArticles()

    // Create random articles for sidebar (take 3 random articles)
    const shuffled = [...articles].sort(() => 0.5 - Math.random())
    const randomArticles = shuffled.slice(0, 3)

    return (
        <>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="gap-8 grid grid-cols-1 lg:grid-cols-12">
                    {/* Main Articles List */}
                    <div className="lg:col-span-9">
                        {children}
                    </div>

                    {/* Sidebar - Random Articles */}
                    <div className="lg:col-span-3">
                        <RandomArticlesSidebar randomArticles={randomArticles} />
                    </div>
                </div>
            </div>
        </>
    )
};
export default Page_HOC;