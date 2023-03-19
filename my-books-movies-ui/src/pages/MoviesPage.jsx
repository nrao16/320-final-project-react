import React from 'react'
import { Box, Grid, Toolbar, Button, Typography } from '@mui/material';
import MovieCardList from '../components/MovieComponents/MovieCardList';
import FavoritesList from '../components/FavoriteComponents/FavoritesList';
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

  }, [apiData])

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
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Button color="inherit"
            variant="text"
            onClick={() => setShowFavorites(!showFavorites)}
            sx={{ textTransform: "capitalize", marginLeft: "auto" }}
          >
            {!showFavorites ? "Show My Favorites" : "Hid My Favorites"}
          </Button>
        </Toolbar>
      </Box>
      <Grid container spacing={1}>
        <Grid container item xs={gridItemBreakpoint} sm={gridItemBreakpoint} md={gridItemBreakpoint}>
          <MovieCardList movieList={movieList} updateFavorites={updateFavorites} favorites={favorites} />
        </Grid>

        {showFavorites &&
          <Grid container item xs={2}>
            <Box>
              <Typography>Favorites</Typography>
              <Grid container>
                <Grid item>
                  <FavoritesList favorites={favorites} removeFromFavorites={removeFromFavorites} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        }

      </Grid>
    </>
  )
}

export default MoviesPage