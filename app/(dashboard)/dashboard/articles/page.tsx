'use client';
import IsError_status from '@/components/common/statusPages/IsError_status';
import IsLoading_status from '@/components/common/statusPages/IsLoading_status';
import { useFetchData } from '@/hooks/useFetchData';
import { getAllArticles } from '@/services/fetch/articles';
import { articleType } from '@/types/services/articles';
import ShowArticlesTable from './_Partials/ShowArticlesTable';
import { Button } from '@mui/material';
import { useState } from 'react';
import CustomDialog from '@/components/common/CustomDialog';
import AddArticle_form from './_Partials/AddArticle_form';

const ArticlesPage = () => {

  const { data, loading, error } = useFetchData<articleType[]>({ fetchFunction: getAllArticles })

  const [openDialog, setOpenDialog] = useState<boolean>(false)

  if (loading) (<IsLoading_status />)
  if (error) (<IsError_status />)
  if (data) {
    return (
      <>
        <div className='relative'>


          <CustomDialog open={openDialog} handleClose={() => setOpenDialog(false)} title='افزودن مقاله' >
            <AddArticle_form />
          </CustomDialog>


          <div className='top-0 left-0 absolute p-2'>
            <Button variant='contained' onClick={() => setOpenDialog(true)}>افزودن مقاله</Button>
          </div>


          <ShowArticlesTable data={data} />
        </div>
      </>
    );
  }
}

export default ArticlesPage;

