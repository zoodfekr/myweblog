import { getAllCategoriesById } from "@/services/fetch/categories";
import React from "react";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  
  const { slug } = await params;
  const category = await getAllCategoriesById(slug);

  if (!category)
    return (
      <div className="flex justify-center items-center bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <div className="text-center">
          <div className="flex justify-center items-center bg-gradient-to-br from-red-500 to-pink-500 mx-auto mb-6 rounded-full w-24 h-24">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="mb-2 font-bold text-gray-800 text-2xl">
            مقاله‌ای موجود نیست
          </h2>
          <p className="text-gray-600">دسته‌بندی مورد نظر یافت نشد</p>
        </div>
      </div>
    );

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 min-h-[50vh] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="top-10 left-10 absolute bg-green-300 opacity-20 blur-xl rounded-full w-96 h-96 animate-blob mix-blend-multiply filter"></div>
          <div className="top-0 right-0 absolute bg-emerald-300 opacity-20 blur-xl rounded-full w-96 h-96 animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
          <div className="-bottom-8 left-20 absolute bg-teal-300 opacity-20 blur-xl rounded-full w-96 h-96 animate-blob animation-delay-4000 mix-blend-multiply filter"></div>
        </div>

        {/* Content */}
        <div className="z-10 relative flex flex-col justify-center items-center px-4 min-h-[50vh] text-center">
          <div className="mb-8">
            <div className="flex justify-center items-center bg-gradient-to-br from-green-500 to-emerald-500 shadow-2xl mx-auto mb-6 rounded-2xl w-20 h-20">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
          <h1 className="bg-clip-text bg-gradient-to-r from-white via-green-200 to-emerald-200 mb-6 font-bold text-transparent text-white text-4xl md:text-6xl">
            {category.title}
          </h1>
          <p className="max-w-3xl text-green-100 text-xl md:text-2xl leading-relaxed">
            {category.description}
          </p>

          {/* Stats Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm mt-8 px-6 py-3 border border-white/20 rounded-full">
            <svg
              className="w-5 h-5 text-green-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold text-green-100">دسته‌بندی فعال</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="mx-auto px-4 max-w-6xl">
          {/* Category Info Card */}
          <div className="mb-16">
            <div className="bg-white shadow-2xl p-8 md:p-12 border border-gray-100 rounded-3xl">
              <div className="flex md:flex-row flex-col items-start md:items-center gap-6 mb-8">
                <div className="flex justify-center items-center bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg rounded-2xl w-16 h-16">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="mb-2 font-bold text-gray-800 text-3xl md:text-4xl">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 border border-green-100 rounded-2xl text-center">
                  <div className="flex justify-center items-center bg-gradient-to-br from-green-500 to-emerald-500 mx-auto mb-4 rounded-xl w-12 h-12">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-800">
                    مقالات تخصصی
                  </h3>
                  <p className="text-gray-600 text-sm">
                    محتوای با کیفیت و کاربردی
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 border border-green-100 rounded-2xl text-center">
                  <div className="flex justify-center items-center bg-gradient-to-br from-green-500 to-emerald-500 mx-auto mb-4 rounded-xl w-12 h-12">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-800">
                    به‌روزرسانی مداوم
                  </h3>
                  <p className="text-gray-600 text-sm">محتوای جدید و مرتبط</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 border border-green-100 rounded-2xl text-center">
                  <div className="flex justify-center items-center bg-gradient-to-br from-green-500 to-emerald-500 mx-auto mb-4 rounded-xl w-12 h-12">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-800">
                    آمار و تحلیل
                  </h3>
                  <p className="text-gray-600 text-sm">داده‌های دقیق و معتبر</p>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <div className="mb-16">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-bold text-gray-800 text-3xl md:text-4xl">
                مقالات این دسته‌بندی
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 text-lg">
                در این بخش می‌توانید تمام مقالات مربوط به این دسته‌بندی را
                مشاهده کنید
              </p>
            </div>

            {/* Articles Grid Placeholder */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Placeholder Cards - Replace with actual articles */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group bg-white shadow-xl hover:shadow-2xl border border-gray-100 rounded-3xl transition-all hover:-translate-y-2 duration-500 transform"
                >
                  <div className="p-8">
                    <div className="flex justify-center items-center bg-gradient-to-br from-green-500 to-emerald-500 mb-6 rounded-xl w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>

                    <h3 className="group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 mb-4 font-bold text-gray-800 group-hover:text-transparent text-xl transition-all duration-300">
                      مقاله نمونه {item}
                    </h3>

                    <p className="mb-6 text-gray-600 leading-relaxed">
                      این یک مقاله نمونه است که در این دسته‌بندی قرار دارد و
                      محتوای مفیدی ارائه می‌دهد.
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-green-600 text-sm">
                        دسته‌بندی
                      </span>
                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 hover:from-green-600 to-emerald-500 hover:to-emerald-600 px-4 py-2 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 transform">
                        <span>مشاهده</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 shadow-2xl p-8 md:p-12 rounded-3xl text-white">
              <div className="flex justify-center items-center bg-white/20 mx-auto mb-6 rounded-2xl w-16 h-16">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 font-bold text-2xl md:text-3xl">
                آماده شروع هستید؟
              </h3>
              <p className="opacity-90 mx-auto mb-8 max-w-2xl text-lg">
                مقالات ما را کاوش کنید و دانش خود را در زمینه {category.title}{" "}
                گسترش دهید
              </p>
              <button className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 shadow-lg px-8 py-4 rounded-2xl font-bold text-green-600 hover:scale-105 transition-all duration-300 transform">
                <span>شروع کاوش</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
