import Appbar from '@/components/layouts/appbar/Appbar'
import Footer_homepage from '@/components/layouts/footer/Footer_homepage'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
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

export default layout