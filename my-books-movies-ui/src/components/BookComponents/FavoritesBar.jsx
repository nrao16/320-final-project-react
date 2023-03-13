import React from 'react'
import { Toolbar, Typography } from '@mui/material';

const FavoritesBar = () => {
    return (
        <Toolbar sx={{ bgcolor: "inherit" }}>
            <Typography variant="h5" fontWeight={"bold"} >Favorite Books</Typography>
        </Toolbar>
    )
}

export default FavoritesBar;
