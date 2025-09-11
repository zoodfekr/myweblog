import React from 'react'
import Appbar from './layout/Appbar'
import Sidebar from './layout/Sidebar'
import PixelBlast from '@/components/common/ui_components/PixelBlast/PixelBlast'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col bg-gray-50 min-h-screen" dir='rtl'>
            <Appbar />
            <div className="flex flex-1" dir='rtl'>
                <Sidebar />
                <main className="relative flex-1 bg-stone-800 ml-60 p-3">
                        {children}
                </main>


            </div >
        </div >
    )
}

export default layout