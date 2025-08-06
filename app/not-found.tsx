import Link from 'next/link';
import DangerousRoundedIcon from '@mui/icons-material/DangerousRounded';

export default function NotFound() {
    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-red-100 to-red-300 px-6 min-h-screen text-gray-800">
            <div className="bg-white shadow-xl p-8 rounded-lg max-w-md text-center animate-fade-in">
                <div className="flex justify-center mb-4 text-red-500 text-6xl">
                    <DangerousRoundedIcon />
                </div>
                <h2 className="mb-2 font-bold text-3xl">صفحه پیدا نشد</h2>
                <p className="mb-6 text-lg">متأسفیم، منبع مورد نظر شما یافت نشد.</p>
                <Link
                    href="/"
                    className="inline-block bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold text-white transition duration-300"
                >
                    بازگشت به صفحه اصلی
                </Link>
            </div>
        </div>
    );
}