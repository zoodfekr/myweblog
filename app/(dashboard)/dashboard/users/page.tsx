'use client';


import { getCookie } from '@/components/common/functions/cookie';
import Switch_btn from '@/components/common/mini_components/Switch_btn';
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


  const tableColumns = [
    { id: 'index', label: '#', minWidth: 30 },
    { id: 'username', label: 'نام', minWidth: 100 },
    { id: 'email', label: 'ایمیل', minWidth: 170 },
    { id: 'role', label: 'نقش', minWidth: 100 },
    { id: 'isAdmin', label: 'مدیر', minWidth: 70 },
    { id: 'actions', label: 'عملگر', minWidth: 70 },
  ];


  return (
    <div className="bg-white shadow p-6 border border-gray-100 rounded-lg">
      <div className="flex items-center gap-2 mb-6">
        <PeopleIcon className="bg-blue-100 p-1 rounded-full text-blue-600 text-2xl" />
        <h2 className="font-bold text-blue-800 text-lg">لیست کاربران</h2>
      </div>
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-blue-50 text-blue-800">
            {tableColumns.map((column) => (
              <th key={column.id} className="px-4 py-2" style={{ minWidth: column.minWidth }}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.map((user, idx) => (
            <tr key={user.id} className="hover:bg-blue-50 border-b">
              <td className="px-4 py-2 font-bold text-blue-700">{idx + 1}</td>
              <td className="px-4 py-2 text-gray-800">{user.username}</td>
              <td className="px-4 py-2 text-gray-600">{user.email}</td>

              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${user.role === 'admin' ? 'bg-blue-100 text-blue-700' : user.role === 'user' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>{user.role}</span>
              </td>

              <td className="px-4 py-2 text-gray-600">
                <Switch_btn id={user.id} role={user.role} onChange_function={handleChangeRole} />
              </td>

              <td className="px-4 py-2 font-semibold text-yellow-700">
                <IconButton
                  aria-label=""
                  onClick={() => handleDeleteUser(user.id)}
                >
                  <DeleteIcon sx={{ fontSize: "15px", color: red[500] }} />
                </IconButton>{" "}
              </td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  );
}