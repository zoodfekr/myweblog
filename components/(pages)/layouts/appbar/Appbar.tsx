import React from 'react'
import Logo_website from './_partials/Logo_website'
import SearchBar from './_partials/SearchBar'
import NavigationBtns from './_partials/NavigationBtns'
import UserIcon from './_partials/UserIcon'
import LoginBtn from './_partials/LoginBtn'
import MobileMenu from './_partials/MobileMenu'

const Appbar = () => {

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#0b0713]/60 border-b border-white/10`}>
            <div className="mx-auto px-3 sm:px-4 lg:px-8">
                <div className="flex justify-between items-center py-2 min-h-[60px]">

                    {/* لوگو و عنوان */}
                    <Logo_website />

                    {/* نوار جستجو - دسکتاپ */}
                    {/* <SearchBar /> */}

                    {/* منوی ناوبری - دسکتاپ */}
                    <NavigationBtns />

                    {/* دکمه ورود - دسکتاپ */}
                    <div className="hidden md:block">
                        <LoginBtn />
                    </div>

                    {/* آیکون‌های کاربر - دسکتاپ */}
                    <div className="hidden md:block">
                        <UserIcon />
                    </div>

                    {/* منوی موبایل */}
                    <div className="md:hidden">
                        <MobileMenu />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Appbar
