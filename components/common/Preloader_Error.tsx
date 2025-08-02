import React from 'react'

const Preloader_Error = () => {
    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-red-100 to-pink-100 h-screen">
            <p className="font-semibold text-red-600 text-xl animate-pulse">
                خطا در بارگذاری اطلاعات ❌
            </p>
        </div>
    )
}

export default Preloader_Error