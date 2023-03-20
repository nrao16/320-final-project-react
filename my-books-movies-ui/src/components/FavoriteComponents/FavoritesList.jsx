import React from 'react';
import { Grid } from '@mui/material';
import FavoriteCard from './FavoriteCard';
import { PropTypes } from 'prop-types';

const FavoritesList = ({ favorites, removeFromFavorites }) => {
    let favoriteListGrid = favorites.map((favoriteItem) => {
        return (
            <Grid item sx={12} key={favoriteItem.id}>
                <FavoriteCard
                    favoriteItem={favoriteItem}
                    removeFromFavorites={removeFromFavorites}
                />
            </Grid>
        )
    });
    return favoriteListGrid;
}

FavoritesList.propTypes = {
    removeFromFavorites: PropTypes.func,
    favorites: PropTypes.array
};

export default FavoritesList