import React, { useState } from 'react'
import { Menu, Search, AccountCircle, Close, Notifications, Settings } from '@mui/icons-material'


const UserIcon = () => {


    return (
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse">
                <button className={`relative p-2 rounded-xl transition-all duration-300 hover:scale-110 group `}>
                    <Notifications className="text-lg" />
                    <div className="-top-1 -right-1 absolute bg-red-500 rounded-full w-3 h-3 animate-pulse"></div>
                </button>
                <button className={`relative p-2 rounded-xl transition-all duration-300 hover:scale-110 group `}>
                    <Settings className="text-lg" />
                </button>
                <button className={`relative p-2 rounded-xl transition-all duration-300 hover:scale-110 group `}>
                    <AccountCircle className="text-lg" />
                </button>
            </div>
        </div>
    )
}

export default UserIcon