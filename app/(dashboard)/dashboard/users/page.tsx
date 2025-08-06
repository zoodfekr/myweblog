'use client';
import PeopleIcon from '@mui/icons-material/People';

const fakeUsers = [
  { id: 1, name: 'علی رضایی', email: 'ali@email.com', role: 'ادمین' },
  { id: 2, name: 'مریم محمدی', email: 'maryam@email.com', role: 'نویسنده' },
  { id: 3, name: 'حسین کریمی', email: 'hossein@email.com', role: 'کاربر' },
  { id: 4, name: 'سارا احمدی', email: 'sara@email.com', role: 'کاربر' },
  { id: 5, name: 'رضا موسوی', email: 'reza@email.com', role: 'ادمین' },
  { id: 6, name: 'نگار شریفی', email: 'negar@email.com', role: 'نویسنده' },
  { id: 7, name: 'محمد عباسی', email: 'mohammad@email.com', role: 'کاربر' },
  { id: 8, name: 'الهام قاسمی', email: 'elham@email.com', role: 'کاربر' },
  { id: 9, name: 'کامران صادقی', email: 'kamran@email.com', role: 'ادمین' },
  { id: 10, name: 'فرزانه مرادی', email: 'farzaneh@email.com', role: 'نویسنده' },
];

export default function UsersPage() {
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
          {fakeUsers.map((user, idx) => (
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