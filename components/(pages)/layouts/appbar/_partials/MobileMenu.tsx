'use client'
import React, { useState } from 'react'
import { Menu, Close, Home, Article, Category, Comment, Search } from '@mui/icons-material'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logout, isLoading } = useAuth()

    const navigationItems = [
        { name: 'خانه', href: '/', icon: Home },
        { name: 'مقالات', href: '/articles', icon: Article },
        { name: 'دسته‌بندی‌ها', href: '/categories', icon: Category },
        { name: 'نظرات', href: '/comments', icon: Comment },
        { name: 'مدیریت', href: '/dashboard', icon: Category },
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="group relative hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 p-3 rounded-2xl overflow-hidden text-white hover:scale-110 transition-all duration-300"
                aria-label="منوی موبایل"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="z-10 relative">
                    {isOpen ? <Close className="text-xl" /> : <Menu className="text-xl" />}
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden z-50 fixed inset-0">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/70"
                        onClick={toggleMenu}
                    />
                    
                    {/* Menu Panel */}
                    <div className="top-0 right-0 absolute bg-slate-900 shadow-2xl border-purple-500/20 border-l w-80 max-w-[85vw] h-screen">
                        <div className="flex flex-col p-6 h-full">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8 pb-4 border-purple-500/20 border-b">
                                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <div className="flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-8 h-8">
                                        <span className="font-bold text-white text-sm">م</span>
                                    </div>
                                    <h2 className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold text-transparent text-xl">منو</h2>
                                </div>
                                <button
                                    onClick={toggleMenu}
                                    className="hover:bg-white/10 p-2 rounded-xl text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
                                >
                                    <Close className="text-xl" />
                                </button>
                            </div>

                            {/* Search Bar for Mobile */}
                            <div className="mb-8">
                                <div className="relative bg-slate-800 shadow-lg px-4 py-4 border border-purple-500/20 rounded-2xl">
                                    <Search className="top-1/2 right-4 absolute text-purple-400 text-lg -translate-y-1/2 transform" />
                                    <input
                                        type="text"
                                        placeholder="جستجوی مقاله..."
                                        className="bg-transparent pr-12 outline-none w-full text-white text-base placeholder-white/60"
                                    />
                                </div>
                            </div>

                            {/* Navigation Items */}
                            <nav className="flex-1 space-y-3">
                                {navigationItems.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={toggleMenu}
                                            className="group relative flex items-center space-x-4 rtl:space-x-reverse hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 p-4 rounded-2xl overflow-hidden text-white transition-all duration-300"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                                            <div className="z-10 relative bg-gradient-to-r from-purple-500/20 group-hover:from-purple-500/30 to-pink-500/20 group-hover:to-pink-500/30 p-2 rounded-xl transition-all duration-300">
                                                <Icon className="text-purple-300 group-hover:text-white text-lg transition-colors duration-300" />
                                            </div>
                                            <span className="z-10 relative font-medium group-hover:text-white text-base transition-colors duration-300">{item.name}</span>
                                        </Link>
                                    )
                                })}
                            </nav>

                            {/* User Section */}
                            <div className="pt-6 border-purple-500/20 border-t">
                                {!isLoading && (
                                    <div className="space-y-4">
                                        {user ? (
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-4 rtl:space-x-reverse bg-slate-800 p-4 border border-purple-500/20 rounded-2xl">
                                                    <div className="flex justify-center items-center bg-gradient-to-r from-emerald-400 to-green-400 shadow-lg rounded-2xl w-12 h-12">
                                                        <span className="font-bold text-white text-lg">
                                                            {user.username?.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block font-semibold text-white text-base">{user.username}</span>
                                                        <span className="text-white/60 text-sm">کاربر فعال</span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        logout()
                                                        toggleMenu()
                                                    }}
                                                    className="flex justify-center items-center space-x-3 rtl:space-x-reverse hover:bg-red-500/10 p-4 border border-red-500/20 hover:border-red-500/40 rounded-2xl w-full text-red-400 hover:text-red-300 transition-all duration-300"
                                                >
                                                    <span className="font-medium text-base">خروج از حساب</span>
                                                </button>
                                            </div>
                                        ) : (
                                            <Link
                                                href="/login"
                                                onClick={toggleMenu}
                                                className="flex justify-center items-center space-x-3 rtl:space-x-reverse bg-gradient-to-r from-purple-500 hover:from-purple-600 to-pink-500 hover:to-pink-600 shadow-lg hover:shadow-purple-500/25 p-4 rounded-2xl w-full text-white hover:scale-105 transition-all duration-300 transform"
                                            >
                                                <span className="font-semibold text-base">ورود به حساب کاربری</span>
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MobileMenu
