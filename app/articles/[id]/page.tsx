import { GetArticlesById } from '@/services/articles/articles';
import { ServerUrl_media } from '@/services/server';
import Image from 'next/image';
import React from 'react';

const Page = async ({ params }: { params: { id: string } }) => {
    const article = await GetArticlesById(params.id);

    if (!article) {
        return (
            <div className="flex justify-center items-center bg-gradient-to-r from-purple-100 to-pink-100 h-screen">
                <p className="font-semibold text-red-600 text-xl animate-pulse">
                    مقاله‌ای یافت نشد ❌
                </p>
            </div>
        );
    }

    return (
        <main className="bg-gradient-to-b from-indigo-50 via-white to-purple-50 px-4 py-12 min-h-screen">
            <div className="mx-auto max-w-3xl">
                <article className="bg-white shadow-xl border border-gray-200 rounded-3xl overflow-hidden hover:scale-[1.01] transition-transform duration-300">

                    {/* تصویر مقاله */}
                    {article.image && (
                        <Image
                            src={`${ServerUrl_media}${article.image}`}
                            alt={article.title}
                            className="w-full h-64 object-cover"
                            width={800}
                            height={400}
                        />
                    )}

                    <div className="p-8">
                        {/* دسته‌بندی */}
                        <span className="inline-block bg-indigo-100 mb-4 px-3 py-1 rounded-full font-medium text-indigo-600 text-xs">
                            🏷 دسته: {article.categoryId}
                        </span>

                        {/* عنوان */}
                        <h1 className="mb-6 font-extrabold text-indigo-700 text-4xl leading-snug">
                            {article.title}
                        </h1>

                        {/* محتوای مقاله */}
                        <section className="mb-6 max-w-none text-gray-800 leading-relaxed prose prose-indigo prose-lg">
                            <p>{article.content}</p>
                        </section>

                        {/* اطلاعات نویسنده و تاریخ */}
                        <div className="flex sm:flex-row flex-col sm:justify-between space-y-1 sm:space-y-0 pt-4 border-gray-200 border-t text-gray-500 text-sm">
                            <span>🖋 نویسنده: {article.author}</span>
                            <span>
                                📅 تاریخ انتشار:{' '}
                                {new Date(article.createdAt).toLocaleDateString('fa-IR')}
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
};

export default Page;
