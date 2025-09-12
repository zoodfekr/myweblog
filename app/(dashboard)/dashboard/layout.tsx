import React from 'react'
import Appbar from './layout/Appbar'
import Sidebar from './layout/Sidebar'
import PixelBlast from '@/components/common/ui_components/PixelBlast/PixelBlast'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen" dir='rtl'>
            <Appbar />
            <div className="flex flex-1" dir='rtl'>
                <Sidebar />
                <main className="relative flex-1 ml-60 p-4">
                        <div className="bg-white/5 shadow-lg backdrop-blur-md p-4 border border-white/10 rounded-2xl">
                            {children}
                        </div>
                </main>


            </div >
        </div >
    )
}

export default layout