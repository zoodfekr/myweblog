import Image from 'next/image'
import React from 'react'
import banner from '@/public/image/girl_article.jpg'


const Banner_homePage = () => {
    return (
        <div className="relative flex flex-col justify-center items-center shadow-lg w-full h-72 md:h-96 overflow-hidden">
            <Image
                src={banner}
                style={{}}
                alt="بنر سایت"
                fill
                quality={100}
                className="w-full h-full object-cover"
                priority
            />
            {/* گرادینت ملایم و شفاف روی تصویر */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-purple-400/30" /> */}
            <div className="z-10 absolute flex flex-col justify-center items-center w-full h-full">
                <h1 className="bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 drop-shadow-xl mb-4 font-extrabold text-transparent text-4xl md:text-6xl text-center">وبلاگ من</h1>
                <p className="opacity-95 font-medium text-purple-100 text-lg md:text-2xl text-center">به دنیای مقالات جذاب خوش آمدید!</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0713] via-[#0b0713]/60 to-transparent" />
            <div className="-top-24 -right-24 absolute bg-purple-700/20 blur-3xl rounded-full w-80 h-80 pointer-events-none" />
            <div className="-bottom-24 -left-24 absolute bg-fuchsia-600/20 blur-3xl rounded-full w-80 h-80 pointer-events-none" />
        </div>
    )
}

export default Banner_homePage