import React from 'react'

import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';

const Logo_website = () => {
    return (
        <div className="group flex items-center space-x-2 rtl:space-x-reverse">

            <div className={`relative p-1 rounded-xl transition-all duration-300 group-hover:scale-110 `}>
                <SchoolTwoToneIcon className="text-xl sm:text-2xl" />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div> */}
            </div>

            <div className="transition-all duration-300">
                <h1 className={`font-bold text-base sm:text-lg md:text-xl transition-colors duration-300 flex text-white`}>
                    مرکز دانش‌افزا
                </h1>
                <p className={`text-xs sm:text-sm transition-colors duration-300 text-white/80 hidden sm:block`}>
                    پرتال مقالات و دانش
                </p>
            </div>

        </div>
    )
}

export default Logo_website