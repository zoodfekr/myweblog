import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/SpaceDashboard';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';
import { FaUsers } from "react-icons/fa";
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';
import StarBorder from '@/components/common/ui_components/starBorder/StarBorder';

const links = [
    { href: '/dashboard', label: 'داشبورد', icon: <DashboardIcon className="text-blue-600" />, blank: false },
    { href: '/dashboard/articles', label: 'مقالات', icon: <ArticleIcon className="text-green-600" />, blank: false },
    { href: '/dashboard/categories', label: 'دسته بندی ها ', icon: <ArticleIcon className="text-green-600" />, blank: false },
    { href: '/dashboard/comments', label: 'نظرات', icon: <CommentIcon className="text-yellow-600" />, blank: false },
    { href: '/dashboard/users', label: 'کاربران', icon: <FaUsers className="text-purple-600" />, blank: false },
    { href: '/', label: 'مشاهده سایت', icon: <CoPresentRoundedIcon className="text-blue-600" />, blank: true },
];

const Sidebar = () => {
    return (
        <aside className="top-0 left-0 z-20 fixed flex flex-col gap-4 bg-white/5 shadow-xl backdrop-blur-md px-4 py-8 border-white/10 w-60 h-screen">

            <div className="flex justify-center items-center mb-8">
                <span className="font-extrabold text-stone-200 text-2xl tracking-tight">پنل مدیریت</span>
            </div>
            <nav className="flex flex-col flex-1 gap-2">
                {links.map(link => (

                    <StarBorder
                        key={link.href}
                        as="button"
                        className="bg-white/5"
                        color="purple"
                        speed="3s"
                    >
                        <Link target={link.blank ? "_blank" : '_parent'} href={link.href} className="group flex items-center gap-2 shadow-sm border border-transparent rounded-lg transition">
                            <span className="drop-shadow-sm text-stone-300 text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                            <span className="drop-shadow-sm font-bold text-stone-300 group-hover:text-indigo-300 text-base tracking-tight transition-colors">
                                {link.label}
                            </span>
                        </Link>
                    </StarBorder>


                ))}
            </nav>




            <div className="mt-auto pt-6 border-gray-100 border-t text-gray-400 text-xs text-center">© 2024 MyWeblog</div>
        </aside>
    );
};

export default Sidebar;