'use client'

import React, { useState } from 'react'
import IsError_status from '@/components/common/statusPages/IsError_status'
import IsLoading_status from '@/components/common/statusPages/IsLoading_status'
import { useFetchData } from '@/hooks/useFetchData'
import { deleteCategory, getAllCategories } from '@/services/fetch/categories'
import { categoriesType } from '@/types/services/categories'
import ShowCategoris from './_Partials/ShowCategoris'
import DataNotFound from '@/components/common/statusPages/DataNotFound'
import CustomDialog from '@/components/common/CustomDialog'
import { Button } from '@mui/material'
import AddCategories from './_Partials/AddCategories'

import { getCookie } from '@/components/common/functions/cookie'

const CategoriesPage = () => {

    const token = getCookie('token_myweblog');

    // hooks
    const { data, loading, error, setData } = useFetchData<categoriesType[]>({ fetchFunction: getAllCategories });
    const [openDialog, setOpenDialog] = useState<boolean>(false)


    // functions

    // تابع افزودن دیتا به کش
    const handleFreshData = (value: categoriesType) => setData(data ? [...data, value] : [value])
    // تابع حذف دیتا از کش
    const handleDeleteCategory = async (id: string) => {
        console.log('del id', id);
        if (token) {
            const res = await deleteCategory({ id: id, token })
            switch (res.status) {
                case 200:
                    console.log(res.message);
                    const filteredData = data?.filter(val => val.id !== id) || [];
                    setData([...filteredData]);
                    break;
                case 400:
                case 403:
                case 404:
                    console.log(res.message);
                    break;
                default:
                    console.log("خطای ناشناخته:", res.message);
            }
        } else {
            console.log('توکن نامعتبر');
        }
    }


    // elements
    if (loading) return <IsLoading_status />;
    if (error) return <IsError_status />;
    if (!data || data.length === 0) return <DataNotFound />

    return (

        <div className='relative border-red-500'>


            <CustomDialog open={openDialog} handleClose={() => setOpenDialog(false)} title='  ➕ افزودن دسته بندی' >
                <AddCategories setOpenDialog={setOpenDialog} handleFreshData={handleFreshData} />
            </CustomDialog>


            <div className='top-0 left-0 absolute p-2'>
                <Button variant='contained' onClick={() => setOpenDialog(true)}>افزودن مقاله</Button>
            </div>

            <ShowCategoris data={data} deleteFunction={handleDeleteCategory} />
        </div>
    );
};

export default CategoriesPage;
