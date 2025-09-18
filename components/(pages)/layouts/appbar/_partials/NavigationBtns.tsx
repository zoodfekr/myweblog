import React from 'react'

import {
    Article,
    Comment,
    Category,
    Home,
} from '@mui/icons-material'
import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

const NavigationBtns = () => {

    // const pathname = usePathname()

    const navigationItems = [
        { name: 'خانه', href: '/', icon: Home },
        { name: 'مقالات', href: '/articles', icon: Article },
        { name: 'دسته‌بندی‌ها', href: '/categories', icon: Category },
        { name: 'نظرات', href: '/comments', icon: Comment },
        { name: ' مدیریت', href: '/dashboard ', icon: Category },
    ]



    return (
        <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            {navigationItems.map((item) => {
                const Icon = item.icon
                // const active = isActive(item.href)
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`relative flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg transition-all duration-300 group overflow-hidden text-white hover:text-white`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        <Icon className="z-10 relative text-lg" />
                        <span className="z-10 relative font-medium text-sm lg:text-base">{item.name}</span>
                        {/* {active && (<div className="right-0 bottom-0 left-0 absolute bg-gradient-to-r from-emerald-400 to-green-400 h-0.5"></div>)} */}
                    </Link>
                )
            })}
        </nav>

    )
}

export default NavigationBtns