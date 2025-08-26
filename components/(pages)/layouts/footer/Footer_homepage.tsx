import React from 'react'
import { Facebook, Instagram, Twitter, Email } from '@mui/icons-material'
import Categores_footer from './partials/Categores_footer'

const Footer_homepage = () => {



    return (
        <footer className="py-8 text-white" style={{ background: '#3E5F44' }}>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mx-auto px-4 max-w-6xl">
                {/* درباره ما */}
                <div>
                    <h2 className="mb-2 font-semibold text-xl">درباره ما</h2>
                    <p className="text-gray-400 text-sm leading-6">
                        ما یک تیم خلاق و پرانرژی هستیم که تلاش می‌کنیم بهترین تجربه را در فضای دیجیتال برای شما بسازیم. خوشحالیم که همراه ما هستید!
                    </p>
                </div>

                {/* دسته بندی ها  */}
                <div>
                    <h2 className="mb-2 font-semibold text-xl">دسته بندی ها  </h2>
                    <Categores_footer />
                </div>

                {/* شبکه‌های اجتماعی */}
                <div>
                    <h2 className="mb-2 font-semibold text-xl">ما را دنبال کنید</h2>
                    <div className="flex space-x-4 rtl:space-x-reverse mt-4">
                        <a href="#" className="text-gray-400 hover:text-white transition"><Facebook /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition"><Instagram /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition"><Twitter /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition"><Email /></a>
                    </div>
                </div>
            </div>

            {/* کپی‌رایت */}
            <div className="mt-8 pt-4 border-gray-700 border-t text-gray-500 text-sm text-center">
                © ۲۰۲۵ تمامی حقوق محفوظ است | طراحی شده با ❤️ توسط تیم شما
            </div>
        </footer>
    )
}

export default Footer_homepage