import React from 'react'
import { getAllArticles } from '@/services/articles/articles'
import Banner_homePage from '@/components/homePage/banner_homePage'
import ShowArticles_homePage from '@/components/homePage/ShowArticles_homePage'

const Page = async () => {
    
    const articles = await getAllArticles()
    const firstSix = articles.slice(0, 6)

    return (
        <div className="bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen">

            {/* بنر سایت */}
            <Banner_homePage />

            {/* لیست مقالات */}
            <ShowArticles_homePage data={firstSix} />

        </div>
    )
}

export default Page