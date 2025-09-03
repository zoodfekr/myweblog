'use client';
import IsError_status from '@/components/common/statusPages/IsError_status';
import IsLoading_status from '@/components/common/statusPages/IsLoading_status';
import { useFetchData } from '@/hooks/useFetchData';
import { getAllArticles } from '@/services/fetch/articles';
import { articleType } from '@/types/articles';
import ShowArticlesTable from './_Partials/ShowArticlesTable';
import { Button } from '@mui/material';
import { useState } from 'react';
import CustomDialog from '@/components/common/CustomDialog';
import AddArticle_form from './_Partials/AddArticle_form';

const ArticlesPage = () => {

  // هوک دریافت دیتا
  const { data, loading, error } = useFetchData<articleType[]>({ fetchFunction: getAllArticles })
  // دیالوگ افزودن و ادیت
  const [openDialog, setOpenDialog] = useState<{ status: boolean, type: 'add' | 'edit', value: articleType | null }>({ status: false, type: 'add', value: null })
  // بستن دیالوگ
  const handleCloseDialog = () => setOpenDialog({ status: false, type: 'add', value: null })
  // تابع باز کننده دیالوگ
  const handleOpenDialog = (type: 'add' | 'edit', value: articleType | null) => setOpenDialog({ status: true, type: type, value: value })




  if (loading) (<IsLoading_status />)
  if (error) (<IsError_status />)
  if (data) {
    return (
      <>
        <div className='relative'>


          <CustomDialog open={openDialog.status} handleClose={handleCloseDialog} title='افزودن مقاله' >
            <AddArticle_form />
          </CustomDialog>


          <div className='top-0 left-0 absolute p-2'>
            <Button variant='contained' onClick={() => handleOpenDialog('add', null)}>افزودن مقاله</Button>
          </div>


          <ShowArticlesTable data={data} handleEdit={handleOpenDialog} />
        </div >
      </>
    );
  }
}

export default ArticlesPage;

