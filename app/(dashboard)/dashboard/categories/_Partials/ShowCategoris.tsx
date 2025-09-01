import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';

import { categoriesType } from '@/types/services/categories'
import IconButton from '@mui/material/IconButton'
import { red } from '@mui/material/colors';

const ShowCategoris = ({ data, deleteFunction }: { data: categoriesType[], deleteFunction: (id: string) => void }) => {
    return (
        <div className="mx-auto p-6 max-w-5xl">
            <h1 className="mb-6 font-extrabold text-gray-800 text-2xl text-center">
                📂 دسته‌بندی‌ها
            </h1>
            <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
                {data.map((val) => (
                    <div
                        key={val.id}
                        className="group relative bg-white/60 shadow-lg hover:shadow-2xl backdrop-blur-sm p-5 border border-gray-200 rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                    >
                        {/* خط رنگی بالا */}
                        <span className="top-0 left-0 absolute bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full h-1"></span>

                        <h2 className="font-semibold text-gray-800 group-hover:text-blue-600 text-lg truncate">
                            {val.title}
                        </h2>

                        <p className="mt-2 text-gray-600 text-sm">{val.description}</p>

                        <span className="block mt-3 text-gray-400 text-xs">
                            ID: {val.id}
                        </span>

                        {/* افکت دایره رنگی هنگام hover */}
                        <div className="-top-10 -right-10 absolute bg-blue-500 opacity-10 rounded-full w-24 h-24 group-hover:scale-150 transition-transform"></div>

                        <div className='flex justify-end border-red-500 grow'>
                            <IconButton aria-label="" onClick={() => deleteFunction(val.id)}>
                                <DeleteIcon sx={{ fontSize: "15px", color: red[500] }} />
                            </IconButton>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShowCategoris