import React from 'react'
import Logo_website from './_partials/Logo_website'
import SearchBar from './_partials/SearchBar'
import NavigationBtns from './_partials/NavigationBtns'
import UserIcon from './_partials/UserIcon'
import LoginBtn from './_partials/LoginBtn'

const Appbar = () => {

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-green-600/90`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2">

                    {/* لوگو و عنوان */}
                    <Logo_website />

                    {/* نوار جستجو - دسکتاپ */}
                    <SearchBar />

                    {/* منوی ناوبری - دسکتاپ */}
                    <NavigationBtns />


                    <LoginBtn />

                    {/* آیکون‌های کاربر و منو */}
                    <UserIcon />
                </div>

            </div>
        </header>
    )
}

export default Appbar
