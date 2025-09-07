'use client';


import { getCookie } from '@/components/common/functions/cookie';
import { useFetchData } from '@/hooks/useFetchData';
import { getAllUsers } from '@/services/fetch/users';
import { UsersType } from '@/types/users';
import PeopleIcon from '@mui/icons-material/People';
import { useEffect, useState } from 'react';



export default function UsersPage() {

  const [tokenValue, setTokenValue] = useState<string>("");

  useEffect(() => {
    const token = getCookie("token_myweblog");
    if (token) setTokenValue(token);
  }, []);

  const { data, loading, error, setData } = useFetchData<UsersType[]>({
    fetchFunction: getAllUsers,
    token: tokenValue,
  });



  return (
    <div className="bg-white shadow p-6 border border-gray-100 rounded-lg">
      <div className="flex items-center gap-2 mb-6">
        <PeopleIcon className="bg-blue-100 p-1 rounded-full text-blue-600 text-2xl" />
        <h2 className="font-bold text-blue-800 text-lg">لیست کاربران</h2>
      </div>
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-blue-50 text-blue-800">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">نام</th>
            <th className="px-4 py-2">ایمیل</th>
            <th className="px-4 py-2">نقش</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, idx) => (
            <tr key={user.id} className="hover:bg-blue-50 border-b">
              <td className="px-4 py-2 font-bold text-blue-700">{idx + 1}</td>
              <td className="px-4 py-2 text-gray-800">{user.name}</td>
              <td className="px-4 py-2 text-gray-600">{user.email}</td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${user.role === 'ادمین' ? 'bg-blue-100 text-blue-700' : user.role === 'نویسنده' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>{user.role}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}