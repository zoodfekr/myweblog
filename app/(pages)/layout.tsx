import Appbar from '@/components/(pages)/layouts/appbar/Appbar'
import Footer_homepage from '@/components/(pages)/layouts/footer/Footer_homepage'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#0b0713' }}>
            {/* اپبار سایت */}
            <Appbar />

            <main className="mx-auto px-4 py-6 container">
                {children}
            </main>

            {/* فوتر سایت */}
            <Footer_homepage />
        </div>
    )
}

export default Layout