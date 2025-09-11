import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

// ایجاد theme با تنظیمات RTL
export const theme = createTheme(
  {
    direction: 'rtl',
    palette: {
      mode: 'dark',
      primary: {
        main: '#7c3aed',
        light: '#a78bfa',
        dark: '#5b21b6',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#9333ea',
        light: '#c084fc',
        dark: '#6b21a8',
        contrastText: '#ffffff',
      },
      background: {
        default: '#0b0713',
        paper: '#151025',
      },
      text: {
        primary: '#e9d8fd',
        secondary: '#c4b5fd',
      },
    },
    typography: {
      fontFamily: 'IRANSansWeb, Arial, sans-serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#0b0713',
            color: '#e9d8fd',
          },
        },
      },
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
            color: '#e9d8fd',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textAlign: 'center',
            borderRadius: 12,
            textTransform: 'none',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#151025',
            backgroundImage: 'none',
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

