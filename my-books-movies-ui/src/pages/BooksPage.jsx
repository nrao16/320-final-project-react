import React from 'react'
import { Box, Grid, Toolbar, Button } from '@mui/material';
import BookCardList from '../components/BookComponents/BookCardList';
import invokeRESTApi from '../services/invokeRESTApi';
import FavoritesList from '../components/FavoriteComponents/FavoritesList';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const url = `${process.env.REACT_APP_NYT_API_BASE_URL}/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`;
  return invokeRESTApi(url);
}

const BooksPage = () => {
  const apiData = useLoaderData();
  const [bookList, setBookList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    console.debug(apiData);
    if (apiData?.results) {
      setBookList(apiData?.results?.books);
    } else {
      console.error(`API error - ${apiData}`)
      setHasError(true);
    }

  }, [apiData])

  if (hasError) {
    return <p>Error!</p>
  }

  const updateFavorites = (book) => {
    if (favorites?.some(favBook => favBook.id === book.id)) {
      removeFromFavorites(book);
    } else {
      addToFavorites(book);
    }
  }
  const addToFavorites = (book) => {
    setFavorites(prevFavorites => {
      let newList = [...prevFavorites];
      newList.push(book);
      return newList;
    }
    );
  }

  const removeFromFavorites = (book) => {
    setFavorites(prevFavorites => {
      let newList = prevFavorites.filter(currentBook =>
        currentBook.id !== book.id
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

      <Grid container spacing={1} >
        <Grid container item xs={gridItemBreakpoint} sm={gridItemBreakpoint} md={gridItemBreakpoint}>
          <BookCardList bookList={bookList} updateFavorites={updateFavorites} favorites={favorites} />
        </Grid>

        {showFavorites &&
          <Grid container item xs={2} sm={2} md={2}>
            <Box>
              Favorites
              <Grid container direction="column">
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

export default BooksPage