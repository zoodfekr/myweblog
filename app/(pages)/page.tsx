import React from 'react'


import { getAllArticles } from '@/services/fetch/articles'
import Banner_homePage from '@/components/(pages)/homePage/Banner_homePage'
import ShowArticles_homePage from '@/components/(pages)/homePage/ShowArticles_homePage'
import Categories from '@/components/(pages)/homePage/Categories'
import { getAllCategories } from '@/services/fetch/categories'

const Page = async () => {


    const articles = await getAllArticles({ revalidate: 28800, cache: 'force-cache' })
    const categories_vallue = await getAllCategories({ revalidate: 28800, cache: 'force-cache' })

    const slicedArticles = articles.slice(0, 10)

    return ( 
        <div className="">

            {/* بنر سایت */}
            <Banner_homePage />

            {/* دسته بندی مقالات */}
            <Categories data={categories_vallue} />


            {/* لیست مقالات */}
            <ShowArticles_homePage data={slicedArticles} />

        </div>
    )
}

export default Page