import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

// ایجاد theme با تنظیمات RTL
export const theme = createTheme(
  {
    direction: 'rtl',
    typography: {
      fontFamily: 'IRANSansWeb, Arial, sans-serif',
    },
    components: {
      MuiTextField: {
        defaultProps: {
          InputProps: {
            style: { textAlign: 'right' }
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            textAlign: 'right',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textAlign: 'center',
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            textAlign: 'right',
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            '& .MuiTableCell-root': {
              textAlign: 'right',
            },
          },
        },
      },
    },
  },
  faIR // اضافه کردن locale فارسی
);

