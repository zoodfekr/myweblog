import Appbar from '@/components/(pages)/layouts/appbar/Appbar'
import Footer_homepage from '@/components/(pages)/layouts/footer/Footer_homepage'
import React from 'react'

import sitebg from '@/public/image/sitebg2.jpg'
import Image from 'next/image'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0b0713' }}>

            {/* پس‌زمینه ثابت سایت */}
            <div className="fixed inset-0 ُz-10">
                <Image
                    src={sitebg}
                    alt=''
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="object-center pointer-events-none select-none"
                />
            </div>


            {/* اپبار سایت */}
            <Appbar />

            <main className="mx-auto px-1 sm:px-4 py-3 sm:py-6 container">
                {children}
            </main>

            {/* فوتر سایت */}
            <Footer_homepage />
        </div>
    )
}

export default Layout