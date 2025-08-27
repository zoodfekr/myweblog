import React from 'react'


import { getAllArticles } from '@/services/fetch/articles'
import Banner_homePage from '@/components/(pages)/homePage/Banner_homePage'
import ShowArticles_homePage from '@/components/(pages)/homePage/ShowArticles_homePage'
import Categories from '@/components/(pages)/homePage/Categories'

const Page = async () => {

    const articles = await getAllArticles()
    const slicedArticles = articles.slice(0, 10)

    return (
        <div className="">

            {/* بنر سایت */}
            <Banner_homePage />

            {/* دسته بندی مقالات */}
            <Categories />


            {/* لیست مقالات */}
            <ShowArticles_homePage data={slicedArticles} />

        </div>
    )
}

export default Page