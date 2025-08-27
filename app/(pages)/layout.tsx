import Appbar from '@/components/(pages)/layouts/appbar/Appbar'
import Footer_homepage from '@/components/(pages)/layouts/footer/Footer_homepage'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {/* اپبار سایت */}
            <Appbar />

            {children}

            {/* فوتر سایت */}
            <Footer_homepage />
        </div>
    )
}

export default Layout