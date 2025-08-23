'use client';

import React from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { getRTLMargin, getRTLPadding } from '@/utils/rtl';

export default function RTLExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        نمونه کامپوننت‌های Material UI با RTL
      </Typography>
      
      <Card sx={{ mb: 3, ...getRTLMargin('16px', '0px') }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            فرم نمونه
          </Typography>
          
          <TextField
            fullWidth
            label="نام کاربری"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          
          <TextField
            fullWidth
            label="رمز عبور"
            type="password"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          
          <Button variant="contained" color="primary">
            ورود
          </Button>
        </CardContent>
      </Card>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>نام</TableCell>
              <TableCell>سن</TableCell>
              <TableCell>شغل</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>احمد</TableCell>
              <TableCell>25</TableCell>
              <TableCell>برنامه‌نویس</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>فاطمه</TableCell>
              <TableCell>30</TableCell>
              <TableCell>طراح</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
