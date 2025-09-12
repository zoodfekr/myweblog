import React from 'react'
import wallpaper from '@/public/image/articleHeader.jpg'
import Image from 'next/image'


const Header_HOC = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className="relative bg-white/50 shadow-lg rounded-2xl overflow-hidden">
            <Image
                src={wallpaper}
                alt=''
                fill
                priority
                sizes="100vw"
                className="object-center object-cover pointer-events-none select-none"
            />
            <div className="relative">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
                    <div className="flex flex-col text-center">
                        <h1 className="mb-2 font-bold text-stone-200 text-4xl t">{title}</h1>
                        <p className="text-stone-200 text-lg">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header_HOC