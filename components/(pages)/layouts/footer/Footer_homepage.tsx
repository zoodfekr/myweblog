import React from 'react'
import { Facebook, Instagram, Twitter, Email } from '@mui/icons-material'
import Categores_footer from './partials/Categores_footer'
import footerbg from '@/public/image/footerBg.jpg'
import Image from 'next/image'

const Footer_homepage = () => {



    return (
        <footer className="relative border-white/10 border-t text-white" style={{ background: '#0b0713' }}>

            <Image
                src={footerbg}  // ساده‌تر: از مسیر public به صورت رشته
                alt="بنر فوتر"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    // position: 'absolute',
                }}
                className="z-0 absolute" // z-0 به‌جای -z-10
                // priority
            />


            <div className="top-0 left-0 z-10 relative gap-6 grid grid-cols-1 md:grid-cols-3 mx-auto px-4 w-full w-full h-full h-full">
                {/* درباره ما */}
                <div>
                    <h2 className="mb-2 font-semibold text-purple-100 text-xl">درباره ما</h2>
                    <p className="text-purple-300/70 text-sm leading-6">
                        ما یک تیم خلاق و پرانرژی هستیم که تلاش می‌کنیم بهترین تجربه را در فضای دیجیتال برای شما بسازیم. خوشحالیم که همراه ما هستید!
                    </p>
                </div>

                {/* دسته بندی ها  */}
                <div>
                    <h2 className="font-semibold text-purple-100 text-xl">دسته بندی ها  </h2>
                    <Categores_footer />
                </div>

                {/* شبکه‌های اجتماعی */}
                <div>
                    <h2 className="font-semibold text-purple-100 text-xl">ما را دنبال کنید</h2>
                    <div className="flex space-x-4 rtl:space-x-reverse mt-4">
                        <a href="#" className="text-purple-300/70 hover:text-purple-200 transition"><Facebook /></a>
                        <a href="#" className="text-purple-300/70 hover:text-purple-200 transition"><Instagram /></a>
                        <a href="#" className="text-purple-300/70 hover:text-purple-200 transition"><Twitter /></a>
                        <a href="#" className="text-purple-300/70 hover:text-purple-200 transition"><Email /></a>
                    </div>
                </div>
            </div>

            {/* کپی‌رایت */}
            <div className="z-10 relative mt-8 pt-4 border-white/10 border-t text-purple-300/70 text-sm text-center">
                © ۲۰۲۵ تمامی حقوق محفوظ است | طراحی شده با ❤️ توسط تیم شما
            </div>
        </footer>
    )
}

export default Footer_homepage