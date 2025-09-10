import React from 'react'
import Appbar from './layout/Appbar'
import Sidebar from './layout/Sidebar'
import PixelBlast from '@/components/common/ui_components/PixelBlast/PixelBlast'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col bg-gray-50 min-h-screen" dir='rtl'>
            <Appbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="relative flex-1 bg-stone-800 ml-60 p-0">


                    <div className="z-10 absolute inset-0 p-3 w-full h-full">
                        {children}
                    </div>

                    <PixelBlast
                        variant="circle"
                        pixelSize={6}
                        color="#B19EEF"
                        patternScale={3}
                        patternDensity={1.2}
                        pixelSizeJitter={0.5}
                        enableRipples
                        rippleSpeed={0.4}
                        rippleThickness={0.12}
                        rippleIntensityScale={1.5}
                        liquid
                        liquidStrength={0.12}
                        liquidRadius={1.2}
                        liquidWobbleSpeed={5}
                        speed={0.6}
                        edgeFade={0.25}
                        transparent
                    />
                </main>


            </div >
        </div >
    )
}

export default layout