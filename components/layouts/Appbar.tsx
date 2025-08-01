import React from 'react'
import { Menu, Search, School, AccountCircle } from '@mui/icons-material'

const Appbar = () => {
    return (
        <header className="bg-green-900 shadow-md text-white">
            <div className="flex justify-between items-center mx-auto px-4 py-3 max-w-7xl">
                {/* لوگو و عنوان */}
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <School fontSize="large" />
                    <h1 className="font-bold text-xl">مرکز دانش‌افزا</h1>
                </div>

                {/* نوار جستجو */}
                <div className="hidden md:flex items-center bg-white px-4 py-1 rounded-full text-gray-700">
                    <Search className="mr-2 rtl:ml-2" />
                    <input
                        type="text"
                        placeholder="جستجوی مقاله..."
                        className="bg-transparent outline-none w-48 placeholder:text-sm"
                    />
                </div>

                {/* آیکون‌های کاربر و منو */}
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <AccountCircle className="cursor-pointer" />
                    <Menu className="md:hidden cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Appbar