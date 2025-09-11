'use client';


import { getCookie } from '@/components/common/functions/cookie';
import Switch_btn from '@/components/common/mini_components/Switch_btn';
import DataTable from '@/components/common/dataTable/DataTable';
import { useFetchData } from '@/hooks/useFetchData';
import useSnack from '@/hooks/useSnack';
import { changeUserRole, deleteUser, getAllUsers } from '@/services/fetch/users';
import { changeUserFunctionType, UsersType } from '@/types/users';
import PeopleIcon from '@mui/icons-material/People';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from '@mui/material/colors';


export default function UsersPage() {

  const snack = useSnack()
  const [tokenValue, setTokenValue] = useState<string>("");

  useEffect(() => {
    const token = getCookie("token_myweblog");
    if (token) setTokenValue(token);
  }, []);

  const { data, loading, error, setData } = useFetchData<UsersType[]>({ fetchFunction: getAllUsers, token: tokenValue });

  // تغییر نقش کاربر
  const handleChangeRole = async (props: changeUserFunctionType) => {
    const { id, role, newRole } = props;
    const res = await changeUserRole({ id, token: tokenValue, body: newRole });
    if ("user" in res) {
      setData((prevData) => {
        if (!prevData) return prevData;
        return prevData.map(user => user.id === id ? { ...user, role: newRole } : user);
      });
      snack({ text: res.message, variant: 'success' })
    } else {
      snack({ text: res.message, variant: 'error' })
    }
  }

  // تابع حذف کاربر
  const handleDeleteUser = async (id: string) => {
    const delres = await deleteUser({ id, token: tokenValue });
    if (delres.status === 200) {
      setData((prevData) => prevData ? prevData.filter(user => user.id !== id) : prevData);
      snack({ text: delres.message, variant: 'success' });
    } else {
      snack({ text: delres.message, variant: 'error' });
    }
  }


  const columns = [
    { key: 'index', header: '#', className: 'text-white' },
    { key: 'username', header: 'نام', className: 'text-white' },
    { key: 'email', header: 'ایمیل', className: 'text-white' },
    { key: 'role', header: 'نقش', className: 'text-white' },
    {
      key: 'isAdmin',
      header: 'مدیر',
      render: (row: UsersType) => (
        <Switch_btn id={row.id} role={row.role} onChange_function={handleChangeRole} />
      ),
      className: 'text-white'
    },
  ];

  const actions = [
    {
      label: 'حذف',
      icon: <DeleteIcon sx={{ fontSize: '25px', color: red[500] }} />,
      onClick: (row: UsersType) => handleDeleteUser(row.id)
    }
  ];


  return (
    <div className="bg-transparent">
      <div className="flex items-center gap-2 mb-6">
        <PeopleIcon className="bg-blue-100 p-1 rounded-full text-blue-600 text-2xl" />
        <h2 className="font-bold text-blue-800 text-lg">لیست کاربران</h2>
      </div>
      {data && (
        <DataTable
          data={data}
          columns={columns}
          actions={actions}
        />
      )}
    </div>
  );
}