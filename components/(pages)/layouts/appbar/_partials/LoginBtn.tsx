'use client'
import Link from 'next/link'

import { useAuth } from '@/contexts/AuthContext'


const LoginBtn = () => {


    const { user, logout, isLoading } = useAuth();



    return (
        <>
            {!isLoading && (
                <div className="flex items-center gap-3 mr-4 pr-4 border-white/20 border-r">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 text-white">
                                <span className="font-medium text-sm lg:text-base">{user.username}</span>
                            </div>
                            <button
                                onClick={() => logout()}
                                className="flex items-center gap-2 text-white/80 hover:text-red-400 transition-colors text-sm lg:text-base"
                            >
                                خروج
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="flex items-center gap-2 text-white/80 hover:text-emerald-400 transition-colors text-sm lg:text-base px-3 py-2 rounded-lg hover:bg-white/10"
                        >
                            ورود
                        </Link>
                    )}
                </div>
            )}

        </>
    )
};

export default LoginBtn