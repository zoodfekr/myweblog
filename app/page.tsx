import React from 'react'
import { getAllArticles } from '@/services/articles'
import Banner_homePage from '@/components/homePage/banner_homePage'
import ShowArticles_homePage from '@/components/homePage/ShowArticles_homePage'
import Footer_homepage from '@/components/layouts/footer/Footer_homepage'
import Categories from '@/components/homePage/Categories'

const Page = async () => {

    const articles = await getAllArticles()
    const firstSix = articles.slice(0, 6)

    return (
        <div className="">

            {/* بنر سایت */}
            <Banner_homePage />

            {/* دسته بندی مقالات */}
            <Categories />


            {/* لیست مقالات */}
            <ShowArticles_homePage data={firstSix} />

        </div>
    )
}

export default Page