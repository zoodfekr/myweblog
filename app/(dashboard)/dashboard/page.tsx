
'use client'
import dynamic from 'next/dynamic';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUpAlt';
import { ApexOptions } from 'apexcharts';
import React from 'react';

interface ChartProps {
  options: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  type: 'line' | 'bar' | 'pie' | 'donut' | 'radar';
  height: number;
}

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false }) as React.FC<ChartProps>;

const stats = [
  { label: 'تعداد کاربران', value: 1200, icon: <PeopleIcon className="text-indigo-300 text-3xl" />, color: 'text-indigo-300' },
  { label: 'تعداد مقالات', value: 340, icon: <ArticleIcon className="text-emerald-300 text-3xl" />, color: 'text-emerald-300' },
  { label: 'تعداد نظرات', value: 980, icon: <CommentIcon className="text-yellow-300 text-3xl" />, color: 'text-yellow-300' },
  { label: 'بازدید امروز', value: 420, icon: <VisibilityIcon className="text-purple-300 text-3xl" />, color: 'text-purple-300' },
  { label: 'لایک‌ها', value: 210, icon: <ThumbUpIcon className="text-pink-300 text-3xl" />, color: 'text-pink-300' },
];

// نمودار خطی
const lineOptions: ApexOptions = {
  chart: { id: 'line', background: 'transparent', foreColor: '#e5e7eb', toolbar: { show: false } },
  theme: { mode: 'dark' },
  xaxis: {
    categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    axisBorder: { color: 'rgba(255,255,255,0.12)' },
    axisTicks: { color: 'rgba(255,255,255,0.12)' },
    labels: { style: { colors: '#cbd5e1' } },
  },
  yaxis: { labels: { style: { colors: '#cbd5e1' } } },
  grid: { borderColor: 'rgba(255,255,255,0.08)' },
  colors: ['#60a5fa', '#34d399', '#fbbf24'],
  dataLabels: { enabled: false },
  legend: { labels: { colors: ['#e5e7eb'] } },
  stroke: { width: 3, curve: 'smooth' },
};
const lineSeries = [
  { name: 'بازدیدها', data: [120, 200, 150, 300, 250, 400] },
  { name: 'کاربران جدید', data: [30, 50, 40, 80, 60, 90] },
  { name: 'نظرات', data: [10, 40, 20, 60, 30, 70] },
];

// نمودار ستونی
const barOptions: ApexOptions = {
  chart: { id: 'bar', background: 'transparent', foreColor: '#e5e7eb', toolbar: { show: false } },
  theme: { mode: 'dark' },
  xaxis: {
    categories: ['مقاله ۱', 'مقاله ۲', 'مقاله ۳', 'مقاله ۴', 'مقاله ۵'],
    axisBorder: { color: 'rgba(255,255,255,0.12)' },
    axisTicks: { color: 'rgba(255,255,255,0.12)' },
    labels: { style: { colors: '#cbd5e1' } },
  },
  yaxis: { labels: { style: { colors: '#cbd5e1' } } },
  grid: { borderColor: 'rgba(255,255,255,0.08)' },
  colors: ['#f59e42'],
  plotOptions: { bar: { borderRadius: 6, columnWidth: '40%' } },
};
const barSeries = [
  { name: 'بازدید', data: [80, 120, 60, 150, 100] },
];

// نمودار دایره‌ای
const pieOptions: ApexOptions = {
  chart: { background: 'transparent', foreColor: '#e5e7eb' },
  theme: { mode: 'dark' },
  labels: ['ادمین', 'نویسنده', 'کاربر'],
  colors: ['#60a5fa', '#34d399', '#fbbf24'],
  legend: { position: 'bottom', labels: { colors: ['#e5e7eb'] } },
};
const pieSeries = [3, 4, 8];

// نمودار دونات
const donutOptions: ApexOptions = {
  chart: { background: 'transparent', foreColor: '#e5e7eb' },
  theme: { mode: 'dark' },
  labels: ['منتشر شده', 'پیش‌نویس', 'در انتظار'],
  colors: ['#10b981', '#f59e42', '#f43f5e'],
  legend: { position: 'bottom', labels: { colors: ['#e5e7eb'] } },
};
const donutSeries = [12, 5, 2];

// نمودار رادار
const radarOptions: ApexOptions = {
  chart: { id: 'radar', background: 'transparent', foreColor: '#e5e7eb', toolbar: { show: false } },
  theme: { mode: 'dark' },
  xaxis: { categories: ['کیفیت', 'سرعت', 'پشتیبانی', 'امنیت', 'سادگی'], labels: { style: { colors: '#cbd5e1' } } },
  colors: ['#818cf8'],
  grid: { borderColor: 'rgba(255,255,255,0.08)' },
  fill: { opacity: 0.3 },
  stroke: { width: 2 },
};
const radarSeries = [
  { name: 'امتیاز', data: [80, 90, 70, 85, 95] },
];

const Page = () => {
  return (
    // language: javascript
    <div className="space-y-8">

      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto p-4 max-w-screen-xl">
        {stats.map((item, idx) => (

          <div key={idx} className="flex items-center bg-white/5 hover:bg-white/10 shadow backdrop-blur-md p-4 border border-white/10 rounded-xl transition duration-300 ease-in-out">
            <div className="mr-4">{item.icon}</div>
            <div>
              <div className={`text-3xl font-extrabold ${item.color}`}>{item.value.toLocaleString()}</div>
              <div className="mt-1 text-stone-300/90 text-sm">{item.label}</div>
            </div>
          </div>
        ))}
      </div>


      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-4 max-w-screen-xl">
        <div className="bg-white/5 hover:bg-white/10 shadow backdrop-blur-md p-6 border border-white/10 rounded-xl transition duration-300 ease-in-out">
          <h2 className="mb-4 font-bold text-indigo-200 text-lg">آمار بازدید ماهانه (خطی)</h2>
          <Chart options={lineOptions} series={lineSeries} type="line" height={250} />
        </div>

        <div className="bg-white/5 hover:bg-white/10 shadow backdrop-blur-md p-6 border border-white/10 rounded-xl transition duration-300 ease-in-out">
          <h2 className="mb-4 font-bold text-amber-200 text-lg">بازدید مقالات (ستونی)</h2>
          <Chart options={barOptions} series={barSeries} type="bar" height={250} />
        </div>

        <div className="bg-white/5 hover:bg-white/10 shadow backdrop-blur-md p-6 border border-white/10 rounded-xl transition duration-300 ease-in-out">
          <h2 className="mb-4 font-bold text-emerald-200 text-lg">نقش کاربران (دایره‌ای)</h2>
          <Chart options={pieOptions} series={pieSeries} type="pie" height={250} />
        </div>

        <div className="bg-white/5 hover:bg-white/10 shadow backdrop-blur-md p-6 border border-white/10 rounded-xl transition duration-300 ease-in-out">
          <h2 className="mb-4 font-bold text-pink-200 text-lg">وضعیت مقالات (دونات)</h2>
          <Chart options={donutOptions} series={donutSeries} type="donut" height={250} />
        </div>

        <div className="bg-white/5 hover:bg-white/10 shadow backdrop-blur-md p-6 border border-white/10 rounded-xl transition duration-300 ease-in-out">
          <h2 className="mb-4 font-bold text-indigo-200 text-lg">امتیازدهی (رادار)</h2>
          <Chart options={radarOptions} series={radarSeries} type="radar" height={250} />
        </div>
      </div>
    </div>
  );
};

export default Page;