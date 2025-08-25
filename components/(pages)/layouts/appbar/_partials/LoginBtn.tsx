'use client'
import Link from 'next/link'

import { useAuth } from '@/contexts/AuthContext'


const LoginBtn = () => {


    const { user, logout, isLoading } = useAuth();



    return (
        <>
            {!isLoading && (
                <div className="flex items-center gap-3 mr-4 pr-4 border-gray-200 border-r">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 text-gray-700">
                                <span className="font-medium">{user.username}</span>
                            </div>
                            <button
                                onClick={() => logout()}
                                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
                            >

                                خروج
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
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