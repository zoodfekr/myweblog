import { GetArticleByCategory } from '@/services/fetch/articles'
import { ServerUrl_media } from '@/services/server'
import { articleType } from '@/types/articles'
import Image from 'next/image'
import React from 'react'

const ShowArticleSample = async ({ id }: { id: string }) => {


    const data: articleType[] | { message: string, status: number } = await GetArticleByCategory({ catId: id, options: { revalidate: 28800, cache: 'force-cache' } })


    if ("status" in data) {
        return (
            <p>خطا در دریافت اطلاعات</p>
        )
    }

    return (
        <div className="mb-16">
            <div className="mb-12 text-center">
                <h2 className="mb-4 font-extrabold text-purple-100 text-3xl md:text-4xl">
                    مقالات این دسته‌بندی
                </h2>
                <p className="mx-auto max-w-2xl text-purple-300/70 text-lg">
                    در این بخش می‌توانید تمام مقالات مربوط به این دسته‌بندی را
                    مشاهده کنید
                </p>
            </div>

            {/* Articles Grid Placeholder */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder Cards - Replace with actual articles */}
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="group hover:bg-white/5 shadow-xl hover:shadow-purple-900/40 border border-white/10 rounded-3xl transition-all hover:-translate-y-2 duration-500 transform card"
                    >
                        <div className="p-8">

                            <div className='flex justify-center mb-3'>
                                <Image
                                    src={`${ServerUrl_media}${item.image}`}
                                    alt={item.title}
                                    style={{ maxHeight: '150px' , maxWidth:"300px" }}
                                    width={300}
                                    height={150}
                                    className="rounded-lg object-cover"
                                />
                            </div>

                            <h3 className="group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-fuchsia-400 mb-4 font-bold text-purple-100 group-hover:text-transparent text-xl transition-all duration-300">
                                {item.title}
                            </h3>

                            <p className="mb-6 text-purple-300/80 leading-relaxed">
                                این یک مقاله نمونه است که در این دسته‌بندی قرار دارد و
                                محتوای مفیدی ارائه می‌دهد.
                            </p>

                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-purple-300 text-sm">
                                    دسته‌بندی
                                </span>
                                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 hover:from-purple-700 to-fuchsia-600 hover:to-fuchsia-700 px-4 py-2 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 transform">
                                    <span>مشاهده</span>

                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )


}

export default ShowArticleSample