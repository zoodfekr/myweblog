import React from 'react'
import Appbar from './_partials/Appbar'
import Sidebar from './_partials/Sidebar'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col bg-gray-50 min-h-screen">
            <Appbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 ml-60 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default layout