'use client'
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter, useSearchParams } from 'next/navigation';

interface MainArticlePaginateProps {
    totalPages: number;
    currentPage: number;
}

export const MainArticlePaginate = ({ totalPages, currentPage }: MainArticlePaginateProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Debug logging
    console.log('Pagination props:', { totalPages, currentPage });

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        console.log('Page change requested:', page);
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        const newUrl = `/articles?${params.toString()}`;
        console.log('Navigating to:', newUrl);
        router.push(newUrl);
    };

    const stackStyle = { 
        border: "", 
        display: "flex", 
        justifyContent: "center", 
        padding: "10px", 
        alignItems: "center", 
        borderRadius: "10px", 
        mt: 2 
    }

    if (totalPages <= 1) {
        return (
            <div className="py-4 text-gray-500 text-sm text-center">
                فقط یک صفحه موجود است
            </div>
        );
    }

    return (
        <Stack spacing={2} sx={stackStyle}>
            <div className="mb-2 text-gray-400 text-sm text-center">
                صفحه {currentPage} از {totalPages}
            </div>
            <Pagination 
                count={totalPages} 
                page={currentPage}
                variant="outlined" 
                color="secondary"
                onChange={handlePageChange}
                size="small"
                showFirstButton
                showLastButton
                siblingCount={1}
                boundaryCount={1}
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: '#e9d8fd',
                        borderColor: 'rgba(124, 58, 237, 0.3)',
                        fontSize: '0.875rem',
                        minWidth: '32px',
                        height: '32px',
                        '&:hover': {
                            backgroundColor: 'rgba(124, 58, 237, 0.1)',
                        },
                        '&.Mui-selected': {
                            backgroundColor: 'rgba(124, 58, 237, 0.3)',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: 'rgba(124, 58, 237, 0.4)',
                            },
                        },
                        '@media (max-width: 768px)': {
                            fontSize: '0.75rem',
                            minWidth: '28px',
                            height: '28px',
                        },
                    },
                }}
            />
        </Stack>
    )
}
