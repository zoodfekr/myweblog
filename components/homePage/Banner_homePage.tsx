import Image from 'next/image'
import React from 'react'
import banner from '@/public/image/banner.jpg'


const Banner_homePage = () => {
    return (
        <div className="relative flex flex-col justify-center items-center shadow-lg w-full h-72 md:h-96 overflow-hidden">
            <Image
                src={banner}
                alt="بنر سایت"
                fill
                className="w-full h-full object-cover"
                priority
            />
            {/* گرادینت ملایم و شفاف روی تصویر */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-purple-400/30" /> */}
            <div className="z-10 absolute flex flex-col justify-center items-center w-full h-full">
                <h1 className="drop-shadow-xl mb-4 font-extrabold text-white text-4xl md:text-6xl text-center">وبلاگ من</h1>
                <p className="opacity-95 font-medium text-white text-lg md:text-2xl text-center">به دنیای مقالات جذاب خوش آمدید!</p>
            </div>
        </div>
    )
}

export default Banner_homePage