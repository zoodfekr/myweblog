import DashboardIcon from '@mui/icons-material/SpaceDashboard';

const Appbar = () => {
  return (
    <header className="z-10 flex items-center bg-white shadow-sm px-6 border-gray-200 border-b w-full h-16">
      <DashboardIcon className="mr-2 text-blue-600 text-2xl" />
      <h1 className="font-bold text-gray-800 text-xl">پنل مدیریت سایت</h1>
    </header>
  );
};

export default Appbar;