'use client'

import React, { useEffect, useState } from 'react'
import IsError_status from '@/components/common/statusPages/IsError_status'
import IsLoading_status from '@/components/common/statusPages/IsLoading_status'
import { useFetchData } from '@/hooks/useFetchData'
import { deleteCategory, getAllCategories } from '@/services/fetch/categories'
import { categoriesType } from '@/types/categories'
import ShowCategoris from './_Partials/ShowCategoris'
import DataNotFound from '@/components/common/statusPages/DataNotFound'
import CustomDialog from '@/components/common/CustomDialog'
import { Button } from '@mui/material'
import AddCategories from './_Partials/AddCategories'

import { getCookie } from '@/components/common/functions/cookie'
import useSnack from '@/hooks/useSnack'
import DataTable from '@/components/common/dataTable/DataTable'
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

const CategoriesPage = () => {

    const snack = useSnack()

    const { data, loading, error, setData } = useFetchData<categoriesType[]>({ fetchFunction: getAllCategories });

    const [openDialog, setOpenDialog] = useState<{ status: boolean, type: 'add' | 'edit', value: categoriesType | null }>({ status: false, type: 'add', value: null })
    const [tokenValue, settokenValue] = useState<string>('')


    // ست کننده توکن در state
    useEffect(() => { const token = getCookie('token_myweblog'); if (token) settokenValue(token) }, [])

    //   تایع مدیریت کش
    const handleFreshData = (value: categoriesType, type: 'add' | 'edit') => {
        if (type === 'add') {
            setData(data ? [...data, value] : [value]);
            snack({ text: 'دسته بندی افزوده شد', variant: 'success' });
        } else if (type === 'edit') {
            const updatedData = data
                ? data.map(val => val.id === value.id ? { ...val, ...value } : val)
                : [value]; // اگر قبلا دیتایی نبوده، یه آرایه جدید بسازه
            setData(updatedData);
            snack({ text: 'دسته بندی ویرایش شد', variant: 'success' });
        }
    };

    // تابع حذف دیتا از کش
    const handleDeleteCategory = async (id: string) => {
        console.log('del id', id);
        if (tokenValue) {
            const res = await deleteCategory({ id: id, args: { token: tokenValue } })
            console.log('del res', res);
            switch (res.status) {
                case 200:
                    console.log(res.message);
                    const filteredData = data?.filter(val => val.id !== id) || [];
                    setData([...filteredData]);
                    snack({ text: res.message, variant: 'success' })
                    break;
                case 400:
                case 403:
                case 404:
                    snack({ text: res.message, variant: 'error' })
                    break;
                default:
                    snack({ text: 'خطای ناشناخته', variant: 'error' })
            }
        } else {
            snack({ text: 'توکن نامعتبر', variant: 'info' })
            console.log('توکن نامعتبر');
        }
    }


    // تابع بستن دیالوگ
    const handleCloseDialogFunction = () => setOpenDialog({ status: false, type: 'add', value: null })
    // بازکردن دیالوگ برای ادیت دسته بندی
    const handleEditFunction = (value: categoriesType) => setOpenDialog({ status: true, type: 'edit', value: value })
    // باز کردن دیالوگ برای افزودن دسته بندی
    const handleAddFunctin = (status: boolean) => setOpenDialog({ status: status, type: 'add', value: null })


    // elements
    if (loading) return <IsLoading_status />;
    if (error) return <IsError_status />;
    if (!data || data.length === 0) return <DataNotFound />

    return (

        <div className='relative border-red-500'>


            <CustomDialog open={openDialog.status} handleClose={handleCloseDialogFunction} title='  ➕ افزودن دسته بندی' >
                <AddCategories setOpenDialog={handleAddFunctin} handleFreshData={handleFreshData} stateValue={openDialog} />
            </CustomDialog>


            <div className='top-0 left-0 absolute p-2'>
                <Button variant='contained' onClick={() => handleAddFunctin(true)}>افزودن دسته بندی</Button>
            </div>

            {data && (
                <DataTable
                    data={data}
                    columns={[
                        { key: 'index', header: '#', className: 'text-white' },
                        { key: 'title', header: 'عنوان', className: 'text-white' },
                        { key: 'slug', header: 'اسلاگ', className: 'text-white' },
                        { key: 'createdAt', header: 'تاریخ ایجاد', className: 'text-white' },
                    ]}
                    actions={[
                        { label: 'ویرایش', icon: <span className='text-blue-400'>Edit</span>, onClick: (row: categoriesType) => handleEditFunction(row) },
                        { label: 'حذف', icon: <DeleteIcon sx={{ fontSize: '25px', color: red[500] }} />, onClick: (row: categoriesType) => handleDeleteCategory(row.id) },
                    ]}
                />
            )}
        </div>
    );
};

export default CategoriesPage;
