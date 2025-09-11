'use client';
import IsError_status from '@/components/common/statusPages/IsError_status';
import IsLoading_status from '@/components/common/statusPages/IsLoading_status';
import { useFetchData } from '@/hooks/useFetchData';
import { deleteArticle, getAllArticles } from '@/services/fetch/articles';
import { articleType } from '@/types/articles';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import CustomDialog from '@/components/common/CustomDialog';
import AddArticle_form from './_Partials/AddArticle_form';
import useSnack from '@/hooks/useSnack';
import { getCookie } from '@/components/common/functions/cookie';
import DataNotFound from '@/components/common/statusPages/DataNotFound';
import ShowArticle from './_Partials/ShowArticle';
import DataTable from '@/components/common/dataTable/DataTable';
import { TiEdit } from "react-icons/ti";
import ShowCategoryById from '@/components/common/ShowCategoryById';
import DeleteIcon from '@mui/icons-material/Delete';
import { blue, red } from '@mui/material/colors';



const ArticlesPage = () => {

  const snack = useSnack()

  // هوک دریافت دیتا
  const { data, loading, error, setData } = useFetchData<articleType[]>({ fetchFunction: getAllArticles })

  // دیالوگ افزودن و ادیت
  const [openDialog, setOpenDialog] = useState<{ status: boolean, type: 'add' | 'edit' | 'show', value: articleType | null }>({ status: false, type: 'add', value: null })
  const [tokenValue, settokenValue] = useState<string>('')

  //  تابع بستن دیالوگ
  const handleCloseDialog = () => setOpenDialog({ status: false, type: 'add', value: null })
  // تابع باز کننده دیالوگ
  const handleOpenDialog = (type: 'add' | 'edit', value: articleType | null) => setOpenDialog({ status: true, type: type, value: value })
  // تابع فعال کننده نمایش اطلاعات دیالوگ
  const handleShowArticle = (value: articleType) => setOpenDialog({ status: true, type: 'show', value })



  // ست کننده توکن در state
  useEffect(() => {
    const token = getCookie('token_myweblog');
    if (token) settokenValue(token)
  }, [])



  // ? عملکرهای جدول
  //   تایع مدیریت کش
  const handleFreshData = (value: articleType, type: 'add' | 'edit' | 'show') => {

    console.log('handleFreshData--------------', value, type);
    if (type === 'add') {
      setData(data ? [...data, value] : [value]);
      snack({ text: 'مقاله افزوده شد', variant: 'success' });
    } else if (type === 'edit') {
      console.log('edit', value);
      const updatedData = data
        ? data.map(val => val.id === value.id ? { ...val, ...value } : val)
        : [value]; // اگر قبلا دیتایی نبوده، یه آرایه جدید بسازه
      setData(updatedData);
      snack({ text: 'مقاله ویرایش شد', variant: 'success' });
    }
  };

  // تابع حذف دیتا از کش
  const handleDeleteArticle = async (id: string) => {
    console.log('del id', id);
    if (tokenValue) {
      const res = await deleteArticle({ id: id, token: tokenValue })
      console.log('del res', res);
      switch (res.status) {
        case 200:
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



  //? مدیریت دیالوگ 
  // هندل کنننده کامپوننت دیالوگ
  const handleDialogComponent = (type: 'add' | 'edit' | 'show') => {
    if (openDialog.status) {
      switch (type) {
        case 'add':
        case 'edit':
          return <AddArticle_form setOpenDialog={handleCloseDialog} handleFreshData={handleFreshData} stateValue={openDialog} />
        case 'show':
          return <ShowArticle data={openDialog.value} />
        default:
          return null
      }
    }
  }
  // مدیریت عنوان دیالوگ 
  const handlleDialogTitle = (prop: string): string => {
    switch (prop) {
      case 'add':
        return 'افزودن مقاله'
      case 'edit':
        return 'ویرایش مقاله'
      case 'show':
        return 'نمایش مقاله'
      default:
        return ''
    }
  }



  // ?اطلاعات جدول
  const columns = [
    { key: "index", header: "#", className: "text-white" },
    { key: "title", header: "عنوان", className: "text-white" },
    { key: "author", header: "نویسنده", className: "text-white" },
    { key: "views", header: "بازدید", className: "font-semibold text-green-700" },
    { key: "createdAt", header: "تاریخ ایجاد", className: "font-semibold text-green-700" },
    {
      key: "categoryId",
      header: "دسته بندی",
      render: (row: articleType) => <ShowCategoryById id={row.categoryId} />,
      className: "font-semibold text-green-700"
    },
  ];

  const actions = [
    {
      label: "ویرایش",
      icon: <TiEdit style={{ fontSize: "25px", color: blue[500] }} />,
      onClick: (row: articleType) => handleOpenDialog("edit", row),
    },
    {
      label: "حذف",
      icon: <DeleteIcon sx={{ fontSize: "25px", color: red[500] }} />,
      onClick: (row: articleType) => handleDeleteArticle(row.id),
    },
  ];


  // ? بخش محتوا
  if (loading) (<IsLoading_status />)
  if (error) (<IsError_status />)
  if ((!data || data.length === 0) && !loading) return <DataNotFound />
  if (data) {
    return (
      <>
        <div className='relative bg-transparent'>

          <CustomDialog open={openDialog.status} handleClose={handleCloseDialog} title={handlleDialogTitle(openDialog.type)}>

            {handleDialogComponent(openDialog.type)}

          </CustomDialog>


          <div className='top-0 left-0 absolute'>
            <Button variant='contained' onClick={() => handleOpenDialog('add', null)}>افزودن مقاله</Button>
          </div>
          <br /><br />

          <DataTable
            data={data}
            columns={columns}
            actions={actions}
            onRowClick={handleShowArticle}
          />


        </div >
      </>
    );
  }
}


export default ArticlesPage;

