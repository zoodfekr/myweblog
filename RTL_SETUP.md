# راهنمای راه‌اندازی RTL برای Material UI

## نصب پکیج‌های مورد نیاز

```bash
npm install stylis stylis-plugin-rtl
```

## فایل‌های ایجاد شده

### 1. `app/theme.ts`
تنظیمات theme برای Material UI با پشتیبانی RTL

### 2. `app/providers.tsx`
Provider برای Material UI با پشتیبانی RTL

### 3. `utils/rtl.ts`
توابع کمکی برای RTL

### 4. `components/common/RTLExample.tsx`
نمونه کامپوننت برای نمایش نحوه استفاده

## نحوه استفاده

### در کامپوننت‌ها
```tsx
import { TextField, Button } from '@mui/material';

// کامپوننت‌ها به صورت خودکار RTL می‌شوند
<TextField label="نام کاربری" />
<Button variant="contained">دکمه</Button>
```

### استفاده از توابع کمکی RTL
```tsx
import { getRTLMargin, getRTLPadding } from '@/utils/rtl';

// برای margin و padding
<Box sx={{ ...getRTLMargin('16px', '0px') }}>
  محتوا
</Box>
```

## ویژگی‌های اعمال شده

- ✅ تمام کامپوننت‌های Material UI راست چین شده‌اند
- ✅ فونت فارسی (IRANSansWeb) تنظیم شده
- ✅ پشتیبانی کامل از RTL
- ✅ تنظیمات خودکار برای TextField، Table، Button و سایر کامپوننت‌ها
- ✅ CSS عمومی برای پشتیبانی بهتر از RTL

## نکات مهم

1. تمام کامپوننت‌های Material UI به صورت خودکار RTL می‌شوند
2. برای margin و padding از توابع کمکی استفاده کنید
3. فونت فارسی به صورت پیش‌فرض تنظیم شده
4. تمام جداول و فرم‌ها راست چین هستند

