'use client'

import React from 'react'
import IsError_status from '@/components/common/statusPages/IsError_status'
import IsLoading_status from '@/components/common/statusPages/IsLoading_status'
import { useFetchData } from '@/hooks/useFetchData'
import { getAllCategories } from '@/services/fetch/categories'
import { categoriesType } from '@/types/services/categories'
import ShowCategoris from './_Partials/ShowCategoris'
import DataNotFound from '@/components/common/statusPages/DataNotFound'

const CategoriesPage = () => {

    const { data, loading, error } = useFetchData<categoriesType[]>({ fetchFunction: getAllCategories });

    if (loading) return <IsLoading_status />;
    if (error) return <IsError_status />;
    if (!data || data.length === 0) return <DataNotFound />

    return (
        <ShowCategoris data={data} />
    );
};

export default CategoriesPage;
