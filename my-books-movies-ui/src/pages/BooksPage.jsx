import React from 'react'
import { Box, Grid } from '@mui/material';
import BookCardList from '../components/BookComponents/BookCardList';
import FavoritesBar from '../components/common/FavoritesBar';
import FavoriteBooksList from '../components/BookComponents/FavoriteBooksList';
import invokeRESTApi from '../services/invokeRESTApi';
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
  const [favoriteBooks, setFavoriteBooks] = useState([]);

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

  const handleFavorites = (book) => {
    if (favoriteBooks?.some(favBook => favBook.primary_isbn13 === book.primary_isbn13)) {
      removeFromFavorites(book);
    } else {
      addToFavorites(book);
    }
  }
  const addToFavorites = (book) => {
    setFavoriteBooks(prevFavoriteBooks => {
      let newList = [...prevFavoriteBooks];
      newList.push(book);
      return newList;
    }
    );
  }

  const removeFromFavorites = (book) => {
    setFavoriteBooks(prevFavoriteBooks => {
      let newList = prevFavoriteBooks.filter(currentBook =>
        currentBook.primary_isbn13 !== book.primary_isbn13
      )
      return newList;
    });

  }

  const bookFavoritesExist = favoriteBooks?.length > 0;
  const gridItemBreakpoint = bookFavoritesExist ? 10 : 12;

  return (
    <Grid container spacing={1} >
      <Grid container item xs={gridItemBreakpoint} sm={gridItemBreakpoint} md={gridItemBreakpoint}>
        <BookCardList bookList={bookList} handleFavorites={handleFavorites} favoriteBooks={favoriteBooks} />
      </Grid>

      {bookFavoritesExist &&
        <Grid container item xs={2} sm={2} md={2}>
          <Box>
            <Grid container direction="column">
              <FavoritesBar />
              <Grid item>
                <FavoriteBooksList favoriteBooks={favoriteBooks} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      }

    </Grid>
  )
}

export default BooksPage