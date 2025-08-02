import React from 'react'


const Header_HOC = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className="bg-white/50 shadow-lg">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
                <div className="text-center">
                    <h1 className="mb-2 font-bold text-gray-900 text-4xl">{title}</h1>
                    <p className="text-gray-600 text-lg">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default Header_HOC