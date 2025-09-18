import React, { useState } from 'react'
import {  AccountCircle, Notifications, Settings } from '@mui/icons-material'


const UserIcon = () => {


    return (
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="hidden sm:flex items-center space-x-1 rtl:space-x-reverse">
                <button className={`relative p-2 rounded-lg transition-all duration-300 hover:scale-110 group text-white hover:bg-white/10`}>
                    <Notifications className="text-lg" />
                    <div className="-top-1 -right-1 absolute bg-red-500 rounded-full w-3 h-3 animate-pulse"></div>
                </button>
                <button className={`relative p-2 rounded-lg transition-all duration-300 hover:scale-110 group text-white hover:bg-white/10`}>
                    <Settings className="text-lg" />
                </button>
                <button className={`relative p-2 rounded-lg transition-all duration-300 hover:scale-110 group text-white hover:bg-white/10`}>
                    <AccountCircle className="text-lg" />
                </button>
            </div>
        </div>
    )
}

export default UserIcon