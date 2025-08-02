'use client'

import React, { useState } from 'react'
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
    Close
} from '@mui/icons-material'

const Appbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const navigationItems = [
        { name: 'خانه', href: '/', icon: Home },
        { name: 'مقالات', href: '/articles', icon: Article },
        { name: 'دسته‌بندی‌ها', href: '/categories', icon: Category },
        { name: 'نظرات', href: '/comments', icon: Comment },
    ]

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/'
        }
        return pathname.startsWith(href)
    }

    return (
        <header className="top-0 z-50 sticky bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 shadow-lg text-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-between items-center py-4">
                    {/* لوگو و عنوان */}
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="bg-white/20 p-2 rounded-lg">
                            <School className="text-2xl" />
                        </div>
                        <div>
                            <h1 className="font-bold text-xl">مرکز دانش‌افزا</h1>
                            <p className="text-emerald-100 text-xs">پرتال مقالات و دانش</p>
                        </div>
                    </div>

                    {/* نوار جستجو - دسکتاپ */}
                    <div className="hidden lg:flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20 rounded-full text-white">
                        <Search className="mr-2 rtl:ml-2 text-emerald-100" />
                        <input
                            type="text"
                            placeholder="جستجوی مقاله..."
                            className="bg-transparent outline-none w-64 text-white placeholder:text-emerald-100"
                        />
                    </div>

                    {/* منوی ناوبری - دسکتاپ */}
                    <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
                        {navigationItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg transition-all duration-200
                                        ${isActive(item.href)
                                            ? 'bg-white/20 text-white shadow-lg'
                                            : 'text-emerald-100 hover:bg-white/10 hover:text-white'
                                        }
                                    `}
                                >
                                    <Icon className="text-lg" />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* آیکون‌های کاربر و منو */}
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse">
                            <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                                <AccountCircle />
                            </button>
                        </div>
                        <button
                            className="md:hidden bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <Close /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* منوی موبایل */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-white/20 border-t">
                        <div className="space-y-2">
                            {/* جستجو در موبایل */}
                            <div className="flex items-center bg-white/10 backdrop-blur-sm mb-4 px-4 py-2 border border-white/20 rounded-lg text-white">
                                <Search className="mr-2 rtl:ml-2 text-emerald-100" />
                                <input
                                    type="text"
                                    placeholder="جستجوی مقاله..."
                                    className="flex-1 bg-transparent outline-none text-white placeholder:text-emerald-100"
                                />
                            </div>

                            {/* لینک‌های ناوبری */}
                            {navigationItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg transition-all duration-200
                                            ${isActive(item.href)
                                                ? 'bg-white/20 text-white'
                                                : 'text-emerald-100 hover:bg-white/10 hover:text-white'
                                            }
                                        `}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Icon className="text-xl" />
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Appbar
