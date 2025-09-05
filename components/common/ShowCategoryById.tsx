'use client'

import { useFetchData } from '@/hooks/useFetchData'
import { getAllCategories } from '@/services/fetch/categories'
import { categoriesType } from '@/types/categories'
import React, { useEffect, useState } from 'react'




const ShowCategoryById = ({ id }: { id: string }) => {
    const [catName, setCatName] = useState<string>('')

    const { data, loading, error } = useFetchData<categoriesType[]>({ fetchFunction: getAllCategories })

    useEffect(() => {
        if (data && data.length > 0) {
            const findedData = data.find(val => val.id === id)
            if (findedData) setCatName(findedData.title)
        }
    }, [data, id])

    if (loading) return <p>در حال دریافت...</p>
    if (!data || data.length === 0) return <p>*</p>

    return <p>{catName}</p>
}

export default ShowCategoryById
