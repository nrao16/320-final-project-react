import React from 'react'
import { Box, Grid, Typography, Divider } from '@mui/material';
import MovieCardList from '../components/MovieComponents/MovieCardList';
import FavoritesList from '../components/FavoriteComponents/FavoritesList';
import StyledSectionDivider from '../components/common/StyledSectionDivider';
import FavoritesToolBar from '../components/FavoriteComponents/FavoritesToolBar';
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
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.debug(apiData);
    if (apiData?.results) {
      setMovieList(apiData?.results);
    } else {
      console.error(`API error - ${apiData}`)
      setHasError(true);
    }

  }, [apiData]);

  if (hasError) {
    return <p>Error!</p>
  }

  const updateFavorites = (movie) => {
    if (favorites?.some(favMovie => favMovie.id === movie.id)) {
      removeFromFavorites(movie);
    } else {
      addToFavorites(movie);
    }
  }
  const addToFavorites = (movie) => {
    setFavorites(prevFavorites => {
      let newList = [...prevFavorites];
      newList.push(movie);
      return newList;
    }
    );
  }

  const removeFromFavorites = (movie) => {
    setFavorites(prevFavorites => {
      let newList = prevFavorites.filter(currentMovie =>
        currentMovie.id !== movie.id
      )
      return newList;
    });

  }

  const gridItemBreakpoint = showFavorites ? 10 : 12;

  return (
    <>
      <FavoritesToolBar setShowFavorites={setShowFavorites} showFavorites={showFavorites} />

      <Grid container>
        <Grid item xs={gridItemBreakpoint}>

          <Grid item xs={12} sm={12} md={12}>
            <StyledSectionDivider text={"New York Times Movie Reviews Top Picks"} />
          </Grid>

          <Grid container item xs={12} sm={12} md={12}>
            <MovieCardList movieList={movieList} updateFavorites={updateFavorites} favorites={favorites} />
          </Grid>
        </Grid>

        {showFavorites &&
          <Grid item xs={2}>
            <Box>
              <Grid item xs={12}>Favorites</Grid>

              <Grid container item xs={12} direction="column">
                <FavoritesList favorites={favorites} removeFromFavorites={removeFromFavorites} />
              </Grid>
            </Box>
          </Grid>
        }

      </Grid>
    </>
  )
}

export default MoviesPage