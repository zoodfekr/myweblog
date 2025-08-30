'use client'

import React, { useState } from 'react'
import IsError_status from '@/components/common/statusPages/IsError_status'
import IsLoading_status from '@/components/common/statusPages/IsLoading_status'
import { useFetchData } from '@/hooks/useFetchData'
import { getAllCategories } from '@/services/fetch/categories'
import { categoriesType } from '@/types/services/categories'
import ShowCategoris from './_Partials/ShowCategoris'
import DataNotFound from '@/components/common/statusPages/DataNotFound'
import CustomDialog from '@/components/common/CustomDialog'
import { Button } from '@mui/material'
import AddCategories from './_Partials/AddCategories'

const CategoriesPage = () => {

    const { data, loading, error } = useFetchData<categoriesType[]>({ fetchFunction: getAllCategories });

    const [openDialog, setOpenDialog] = useState<boolean>(false)

    if (loading) return <IsLoading_status />;
    if (error) return <IsError_status />;
    if (!data || data.length === 0) return <DataNotFound />

    return (

        <div className='relative border border-red-500'>


            <CustomDialog open={openDialog} handleClose={() => setOpenDialog(false)} title='افزودن مقاله' >
                <AddCategories />
            </CustomDialog>


            <div className='top-0 left-0 absolute p-2'>
                <Button variant='contained' onClick={() => setOpenDialog(true)}>افزودن مقاله</Button>
            </div>

            <ShowCategoris data={data} />
        </div>
    );
};

export default CategoriesPage;
