'use client';
import IsError_status from '@/components/common/statusPages/IsError_status';
import IsLoading_status from '@/components/common/statusPages/IsLoading_status';
import { useFetchData } from '@/hooks/useFetchData';
import { deleteArticle, getAllArticles } from '@/services/fetch/articles';
import { articleType } from '@/types/articles';
import ShowArticlesTable from './_Partials/ShowArticlesTable';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import CustomDialog from '@/components/common/CustomDialog';
import AddArticle_form from './_Partials/AddArticle_form';
import useSnack from '@/hooks/useSnack';
import { getCookie } from '@/components/common/functions/cookie';

const ArticlesPage = () => {

  const snack = useSnack()

  // هوک دریافت دیتا
  const { data, loading, error, setData } = useFetchData<articleType[]>({ fetchFunction: getAllArticles })

  // دیالوگ افزودن و ادیت
  const [openDialog, setOpenDialog] = useState<{ status: boolean, type: 'add' | 'edit', value: articleType | null }>({ status: false, type: 'add', value: null })
  const [tokenValue, settokenValue] = useState<string>('')

  //  تابع بستن دیالوگ
  const handleCloseDialog = () => setOpenDialog({ status: false, type: 'add', value: null })
  // تابع باز کننده دیالوگ
  const handleOpenDialog = (type: 'add' | 'edit', value: articleType | null) => setOpenDialog({ status: true, type: type, value: value })

  // ست کننده توکن در state
  useEffect(() => { const token = getCookie('token_myweblog'); if (token) settokenValue(token) }, [])


  // تابع حذف دیتا از کش
  const handleDeleteArticle = async (id: string) => {
    console.log('del id', id);
    if (tokenValue) {
      const res = await deleteArticle({ id: id, token: tokenValue })
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

  if (loading) (<IsLoading_status />)
  if (error) (<IsError_status />)
  if (data) {
    return (
      <>
        <div className='relative'>


          {/* <CustomDialog open={openDialog.status} handleClose={handleCloseDialog} title='افزودن مقاله' >
            <AddArticle_form />
          </CustomDialog> */}


          <div className='top-0 left-0 absolute p-2'>
            <Button variant='contained' onClick={() => handleOpenDialog('add', null)}>افزودن مقاله</Button>
          </div>


          <ShowArticlesTable data={data} handleEdit={handleOpenDialog} deleteFunction={handleDeleteArticle} />
        </div >
      </>
    );
  }
}

export default ArticlesPage;

