import React from 'react'

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const SearchBar = () => {
    return (
        <div className="group hidden relative lg:flex items-center">
            <div className={`relative bg-white/10 backdrop-blur-sm px-6 py-1 border border-white/20 rounded-full transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-lg `}>
                <SearchTwoToneIcon className={`mr-3 rtl:ml-3 transition-colors duration-300 '
                    }`} />
                <input
                    type="text"
                    placeholder="جستجوی مقاله..."
                    className={`bg-transparent outline-none w-80 transition-colors duration-300 `}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
            </div>
        </div>
    )
}

export default SearchBar