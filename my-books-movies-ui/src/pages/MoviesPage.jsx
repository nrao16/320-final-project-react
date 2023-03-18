import React from 'react'
import { Box, Grid } from '@mui/material';
import MovieCardList from '../components/MovieComponents/MovieCardList';
import FavoritesBar from '../components/common/FavoritesBar';
import FavoriteMoviesList from '../components/MovieComponents/FavoriteMoviesList';
import invokeRESTApi from '../services/invokeRESTApi';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const url = `${process.env.REACT_APP_NYT_API_BASE_URL}/movies/v2/reviews/picks.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`;
  return invokeRESTApi(url);
}


const MoviesPage = () => {
  const apiData = useLoaderData();
  const [movieList, setMovieList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    console.debug(apiData);
    if (apiData?.results) {
      setMovieList(apiData?.results);
    } else {
      console.error(`API error - ${apiData}`)
      setHasError(true);
    }

  }, [apiData])

  if (hasError) {
    return <p>Error!</p>
  }

  const handleFavorites = (movie) => {
    if (favoriteMovies?.some(favMovie => favMovie.display_title === movie.display_title)) {
      removeFromFavorites(movie);
    } else {
      addToFavorites(movie);
    }
  }
  const addToFavorites = (movie) => {
    setFavoriteMovies(prevFavoriteMovies => {
      let newList = [...prevFavoriteMovies];
      newList.push(movie);
      return newList;
    }
    );
  }

  const removeFromFavorites = (movie) => {
    setFavoriteMovies(prevFavoriteMovies => {
      let newList = prevFavoriteMovies.filter(currentMovie =>
        currentMovie.display_title !== movie.display_title
      )
      return newList;
    });

  }

  const movieFavoritesExist = favoriteMovies?.length > 0;
  const gridItemBreakpoint = movieFavoritesExist ? 10 : 12;

  return (
    <Grid container spacing={1}>

      <Grid container item xs={gridItemBreakpoint} sm={gridItemBreakpoint} md={gridItemBreakpoint}>
        <MovieCardList movieList={movieList} handleFavorites={handleFavorites} favoriteMovies={favoriteMovies} />
      </Grid>

      {movieFavoritesExist &&
        <Grid container item xs={2}>
          <Box>
            <Grid container>
              <FavoritesBar />
              <Grid item>
                <FavoriteMoviesList favoriteMovies={favoriteMovies} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      }

    </Grid>
  )
}

export default MoviesPage