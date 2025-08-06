'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Menu,
    Search,
    School,
    AccountCircle,
    Article,
    Comment,
    Category,
    Home,
    Close,
    Notifications,
    Settings
} from '@mui/icons-material'

const Appbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    const navigationItems = [
        { name: 'خانه', href: '/', icon: Home },
        { name: 'مقالات', href: '/articles', icon: Article },
        { name: 'دسته‌بندی‌ها', href: '/categories', icon: Category },
        { name: ' مدیریت', href: '/dashboard ', icon: Category },
        { name: 'نظرات', href: '/comments', icon: Comment },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/'
        }
        return pathname.startsWith(href)
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
                : 'bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700'
        }`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-between items-center py-4">
                    {/* لوگو و عنوان */}
                    <div className="group flex items-center space-x-4 rtl:space-x-reverse">
                        <div className={`relative p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                            isScrolled 
                                ? 'bg-emerald-500/20 text-emerald-600' 
                                : 'bg-white/20 text-white'
                        }`}>
                            <School className="text-2xl" />
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                        </div>
                        <div className="transition-all duration-300">
                            <h1 className={`font-bold text-xl transition-colors duration-300 ${
                                isScrolled ? 'text-gray-800' : 'text-white'
                            }`}>
                                مرکز دانش‌افزا
                            </h1>
                            <p className={`text-xs transition-colors duration-300 ${
                                isScrolled ? 'text-gray-600' : 'text-emerald-100'
                            }`}>
                                پرتال مقالات و دانش
                            </p>
                        </div>
                    </div>

                    {/* نوار جستجو - دسکتاپ */}
                    <div className="group hidden relative lg:flex items-center">
                        <div className={`relative bg-white/10 backdrop-blur-sm px-6 py-3 border border-white/20 rounded-full transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-lg ${
                            isScrolled ? 'bg-gray-100/80 border-gray-200' : ''
                        }`}>
                            <Search className={`mr-3 rtl:ml-3 transition-colors duration-300 ${
                                isScrolled ? 'text-gray-500' : 'text-emerald-100'
                            }`} />
                            <input
                                type="text"
                                placeholder="جستجوی مقاله..."
                                className={`bg-transparent outline-none w-80 transition-colors duration-300 ${
                                    isScrolled 
                                        ? 'text-gray-800 placeholder:text-gray-500' 
                                        : 'text-white placeholder:text-emerald-100'
                                }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
                        </div>
                    </div>

                    {/* منوی ناوبری - دسکتاپ */}
                    <nav className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
                        {navigationItems.map((item) => {
                            const Icon = item.icon
                            const active = isActive(item.href)
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl transition-all duration-300 group overflow-hidden
                                        ${active
                                            ? isScrolled 
                                                ? 'bg-emerald-500 text-white shadow-lg' 
                                                : 'bg-white/20 text-white shadow-lg'
                                            : isScrolled
                                                ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                                : 'text-emerald-100 hover:bg-white/10 hover:text-white'
                                        }
                                    `}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <Icon className="z-10 relative text-lg" />
                                    <span className="z-10 relative font-medium">{item.name}</span>
                                    {active && (
                                        <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-r from-emerald-400 to-green-400 h-0.5"></div>
                                    )}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* آیکون‌های کاربر و منو */}
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse">
                            <button className={`relative p-2 rounded-xl transition-all duration-300 hover:scale-110 group ${
                                isScrolled 
                                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}>
                                <Notifications className="text-lg" />
                                <div className="-top-1 -right-1 absolute bg-red-500 rounded-full w-3 h-3 animate-pulse"></div>
                            </button>
                            <button className={`relative p-2 rounded-xl transition-all duration-300 hover:scale-110 group ${
                                isScrolled 
                                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}>
                                <Settings className="text-lg" />
                            </button>
                            <button className={`relative p-2 rounded-xl transition-all duration-300 hover:scale-110 group ${
                                isScrolled 
                                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}>
                                <AccountCircle className="text-lg" />
                            </button>
                        </div>
                        <button
                            className={`md:hidden p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                                isScrolled 
                                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <Close /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* منوی موبایل */}
                {isMobileMenuOpen && (
                    <div className={`md:hidden py-6 transition-all duration-300 ${
                        isScrolled 
                            ? 'border-gray-200/50' 
                            : 'border-white/20'
                    } border-t`}>
                        <div className="space-y-3">
                            {/* جستجو در موبایل */}
                            <div className={`relative flex items-center backdrop-blur-sm px-4 py-3 border rounded-xl transition-all duration-300 ${
                                isScrolled 
                                    ? 'bg-gray-100/80 border-gray-200' 
                                    : 'bg-white/10 border-white/20'
                            }`}>
                                <Search className={`mr-3 rtl:ml-3 transition-colors duration-300 ${
                                    isScrolled ? 'text-gray-500' : 'text-emerald-100'
                                }`} />
                                <input
                                    type="text"
                                    placeholder="جستجوی مقاله..."
                                    className={`flex-1 bg-transparent outline-none transition-colors duration-300 ${
                                        isScrolled 
                                            ? 'text-gray-800 placeholder:text-gray-500' 
                                            : 'text-white placeholder:text-emerald-100'
                                    }`}
                                />
                            </div>

                            {/* لینک‌های ناوبری */}
                            {navigationItems.map((item) => {
                                const Icon = item.icon
                                const active = isActive(item.href)
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`relative flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-xl transition-all duration-300 group overflow-hidden
                                            ${active
                                                ? isScrolled 
                                                    ? 'bg-emerald-500 text-white' 
                                                    : 'bg-white/20 text-white'
                                                : isScrolled
                                                    ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                                    : 'text-emerald-100 hover:bg-white/10 hover:text-white'
                                            }
                                        `}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <Icon className="z-10 relative text-xl" />
                                        <span className="z-10 relative font-medium">{item.name}</span>
                                        {active && (
                                            <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-r from-emerald-400 to-green-400 h-0.5"></div>
                                        )}
                                    </Link>
                                )
                            })}

                            {/* آیکون‌های اضافی در موبایل */}
                            <div className="flex items-center space-x-2 rtl:space-x-reverse pt-4">
                                <button className={`flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse p-3 rounded-xl transition-all duration-300 ${
                                    isScrolled 
                                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                    <Notifications className="text-lg" />
                                    <span className="font-medium">اعلان‌ها</span>
                                </button>
                                <button className={`flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse p-3 rounded-xl transition-all duration-300 ${
                                    isScrolled 
                                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                    <AccountCircle className="text-lg" />
                                    <span className="font-medium">حساب کاربری</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Appbar
