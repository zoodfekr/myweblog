import GradientText from '@/components/common/ui_components/GradientText/GradientText';
import DashboardIcon from '@mui/icons-material/SpaceDashboard';

const Appbar = () => {
  return (
    <header className="top-0 z-20 sticky flex items-center gap-3 bg-white/5 shadow-sm backdrop-blur-md px-6 border-white/10 border-b w-full h-16">
      <DashboardIcon className="mr-2 text-purple-500 text-2xl" />
      <GradientText
        colors={["#7C3AED", "#9333EA", "#A855F7", "#C084FC", "#9333EA"]}
        animationSpeed={3}
        showBorder={false}
        className="" 
      >
        <span className='font-bold text-stone-200 text-2xl'>
          پنل مدیریت سایت
        </span>
      </GradientText>
    </header>
  );
};

export default Appbar;