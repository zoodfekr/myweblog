import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const MainArticlePaginate = () => {


    const stackStyle = { border: "", display: "flex", justifyContent: "center", padding: "5px", alignItems: "center", borderRadius: "10px", mt: 1 }

    return (
        <Stack spacing={2} sx={stackStyle} >
            <Pagination count={10} variant="outlined" color="secondary" />
        </Stack>
    )
}
