import React from 'react'
import MovieCard from './MovieCard';
import { Grid } from '@mui/material';

const MovieCardList = ({ movieList, handleFavorites, favoriteMovies }) => {
    let movieListGrid = movieList.map((movie) => {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={movie.display_title} >
                <MovieCard movie={movie}
                    handleFavorites={handleFavorites}
                    favoriteMovies={favoriteMovies}
                />
            </Grid>
        )
    });
    return movieListGrid;
}

export default MovieCardList