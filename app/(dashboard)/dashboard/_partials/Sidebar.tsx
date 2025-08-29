import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/SpaceDashboard';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';

const links = [
    { href: '/dashboard', label: 'داشبورد', icon: <DashboardIcon className="text-blue-600" />, blank: false },
    { href: '/', label: 'مشاهده سایت', icon: <CoPresentRoundedIcon className="text-blue-600" />, blank: true },
    { href: '/dashboard/articles', label: 'مقالات', icon: <ArticleIcon className="text-green-600" />, blank: false },
    { href: '/dashboard/categories', label: 'دسته بندی ها ', icon: <ArticleIcon className="text-green-600" />, blank: false },
    { href: '/dashboard/comments', label: 'نظرات', icon: <CommentIcon className="text-yellow-600" />, blank: false },
    { href: '/dashboard/users', label: 'کاربران', icon: <PeopleIcon className="text-purple-600" />, blank: false },
    { href: '/dashboard/reports', label: 'گزارشات', icon: <BarChartIcon className="text-pink-600" />, blank: false },
    { href: '/dashboard/notifications', label: 'اعلان‌ها', icon: <NotificationsIcon className="text-orange-500" />, blank: false },
    { href: '/dashboard/settings', label: 'تنظیمات', icon: <SettingsIcon className="text-gray-600" />, blank: false },
    { href: '/logout', label: 'خروج', icon: <LogoutIcon className="text-red-500" />, blank: false },
];

const Sidebar = () => {
    return (
        <aside className="top-0 left-0 z-20 fixed flex flex-col gap-4 bg-gradient-to-b from-blue-50 via-white to-blue-100 shadow-xl px-4 py-8 border-gray-200 border-l w-60 h-screen">
            <div className="flex justify-center items-center mb-8">
                <span className="font-extrabold text-blue-700 text-2xl tracking-tight">پنل مدیریت</span>
            </div>
            <nav className="flex flex-col flex-1 gap-2">
                {links.map(link => (
                    <Link target={link.blank ? "_blank" : '_parent'} key={link.href} href={link.href} className="group flex items-center gap-4 bg-white/80 hover:bg-blue-100 shadow-sm px-4 py-3 border border-transparent hover:border-blue-300 rounded-lg transition">
                        <span className="drop-shadow-sm text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                        <span className="drop-shadow-sm font-bold text-gray-700 group-hover:text-blue-700 text-base tracking-tight transition-colors">
                            {link.label}
                        </span>
                    </Link>
                ))}
            </nav>
            <div className="mt-auto pt-6 border-gray-100 border-t text-gray-400 text-xs text-center">© 2024 MyWeblog</div>
        </aside>
    );
};

export default Sidebar;