import React from 'react';
import { Grid } from '@mui/material';
import FavoriteCard from './FavoriteCard';

const FavoritesList = ({ favorites, removeFromFavorites }) => {
    let favoriteListGrid = favorites.map((favoriteItem) => {
        return (
            <Grid item key={favoriteItem.id}>
                <FavoriteCard
                    favoriteItem={favoriteItem}
                    removeFromFavorites={removeFromFavorites}
                />
            </Grid>
        )
    });
    return favoriteListGrid;
}

export default FavoritesList