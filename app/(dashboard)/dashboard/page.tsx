
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
  { label: 'تعداد کاربران', value: 1200, icon: <PeopleIcon className="bg-blue-100 p-1 rounded-full text-blue-600 text-3xl" />, color: 'text-blue-700' },
  { label: 'تعداد مقالات', value: 340, icon: <ArticleIcon className="bg-green-100 p-1 rounded-full text-green-600 text-3xl" />, color: 'text-green-700' },
  { label: 'تعداد نظرات', value: 980, icon: <CommentIcon className="bg-yellow-100 p-1 rounded-full text-yellow-600 text-3xl" />, color: 'text-yellow-700' },
  { label: 'بازدید امروز', value: 420, icon: <VisibilityIcon className="bg-purple-100 p-1 rounded-full text-purple-600 text-3xl" />, color: 'text-purple-700' },
  { label: 'لایک‌ها', value: 210, icon: <ThumbUpIcon className="bg-pink-100 p-1 rounded-full text-pink-600 text-3xl" />, color: 'text-pink-700' },
];

// نمودار خطی
const lineOptions: ApexOptions = {
  chart: { id: 'line' },
  xaxis: { categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'] },
  colors: ['#2563eb', '#22c55e', '#eab308'],
  dataLabels: { style: { colors: ['#222'] } },
  legend: { labels: { colors: ['#222'] } },
};
const lineSeries = [
  { name: 'بازدیدها', data: [120, 200, 150, 300, 250, 400] },
  { name: 'کاربران جدید', data: [30, 50, 40, 80, 60, 90] },
  { name: 'نظرات', data: [10, 40, 20, 60, 30, 70] },
];

// نمودار ستونی
const barOptions: ApexOptions = {
  chart: { id: 'bar' },
  xaxis: { categories: ['مقاله ۱', 'مقاله ۲', 'مقاله ۳', 'مقاله ۴', 'مقاله ۵'] },
  colors: ['#f59e42'],
};
const barSeries = [
  { name: 'بازدید', data: [80, 120, 60, 150, 100] },
];

// نمودار دایره‌ای
const pieOptions: ApexOptions = {
  labels: ['ادمین', 'نویسنده', 'کاربر'],
  colors: ['#2563eb', '#22c55e', '#eab308'],
  legend: { position: 'bottom' },
};
const pieSeries = [3, 4, 8];

// نمودار دونات
const donutOptions: ApexOptions = {
  labels: ['منتشر شده', 'پیش‌نویس', 'در انتظار'],
  colors: ['#10b981', '#f59e42', '#f43f5e'],
  legend: { position: 'bottom' },
};
const donutSeries = [12, 5, 2];

// نمودار رادار
const radarOptions: ApexOptions = {
  chart: { id: 'radar' },
  xaxis: { categories: ['کیفیت', 'سرعت', 'پشتیبانی', 'امنیت', 'سادگی'] },
  colors: ['#6366f1'],
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


          <div key={idx} className="flex items-center bg-white hover:bg-gray-100 shadow p-4 rounded-lg transition duration-300 ease-in-out">
            <div className="mr-4">{item.icon}</div>
            <div>
              <div className={`text-3xl font-extrabold ${item.color}`}>{item.value.toLocaleString()}</div>

              <div className="mt-1 text-gray-600 text-sm">{item.label}</div>
            </div>
          </div>
        ))}
      </div>


      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-4 max-w-screen-xl">
        <div className="bg-white hover:bg-gray-100 shadow p-6 rounded-lg transition duration-300 ease-in-out">
          <h2 className="mb-4 font-bold text-blue-800 text-lg">آمار بازدید ماهانه (خطی)</h2>
          <Chart options={lineOptions} series={lineSeries} type="line" height={250} />
        </div>

        <div className="bg-white hover:bg-gray-100 shadow p-6 rounded-lg transition duration-300 ease-in-out">
          <h2 className="mb-4 font-bold text-orange-800 text-lg">بازدید مقالات (ستونی)</h2>
          <Chart options={barOptions} series={barSeries} type="bar" height={250} />
        </div>

        <div className="bg-white hover:bg-gray-100 shadow p-6 rounded-lg transition duration-300 ease-in-out">
          <h2 className="mb-4 font-bold text-green-800 text-lg">نقش کاربران (دایره‌ای)</h2>
          <Chart options={pieOptions} series={pieSeries} type="pie" height={250} />
        </div>

        <div className="bg-white hover:bg-gray-100 shadow p-6 rounded-lg transition duration-300 ease-in-out">
          <h2 className="mb-4 font-bold text-pink-800 text-lg">وضعیت مقالات (دونات)</h2>
          <Chart options={donutOptions} series={donutSeries} type="donut" height={250} />
        </div>

        <div className="bg-white hover:bg-gray-100 shadow p-6 rounded-lg transition duration-300 ease-in-out">
          <h2 className="mb-4 font-bold text-indigo-800 text-lg">امتیازدهی (رادار)</h2>
          <Chart options={radarOptions} series={radarSeries} type="radar" height={250} />
        </div>
      </div>
    </div>
  );
};

export default Page;