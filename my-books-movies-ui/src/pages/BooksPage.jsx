import React from 'react'
import { Box, Grid } from '@mui/material';
import BookCardList from '../components/BookComponents/BookCardList';
import FavoritesToolBar from '../components/FavoriteComponents/FavoritesToolBar';
import FavoritesList from '../components/FavoriteComponents/FavoritesList';
import StyledSectionDivider from '../components/common/StyledSectionDivider';
import invokeRESTApi from '../services/invokeRESTApi';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const nytBooksURL = `${process.env.REACT_APP_NYT_API_BASE_URL}/books/v3/lists/current/`;
  const nytApiKey = `api-key=${process.env.REACT_APP_NYT_API_KEY}`;
  const [hardcoverFiction, hardcoverNonfiction,
    paperbackNonfiction] = await Promise.all([
      invokeRESTApi(`${nytBooksURL}hardcover-fiction.json?${nytApiKey}`),
      invokeRESTApi(`${nytBooksURL}hardcover-nonfiction.json?${nytApiKey}`),
      invokeRESTApi(`${nytBooksURL}paperback-nonfiction.json?${nytApiKey}`),
      // For future enhancements
      // invokeRESTApi(`${nytBooksURL}graphic-books-and-manga.json?${nytApiKey}`),
      //  invokeRESTApi(`${nytBooksURL}audio-fiction.json?${nytApiKey}`),
      //  invokeRESTApi(`${nytBooksURL}audio-nonfiction?${nytApiKey}`),
    ]);
  return {
    hardcoverFiction, hardcoverNonfiction,
    paperbackNonfiction
  };

}

const BooksPage = () => {

  // all the loaded data
  const { hardcoverFiction, hardcoverNonfiction,
    paperbackNonfiction, } = useLoaderData();

  const [hardcoverFictionBookList, setHardcoverFictionBookList] = useState([]);
  const [hardcoverNonFictionBookList, setHardcoverNonFictionBookList] = useState([]);
  const [paperbackNonFictionBookList, setPaperbackNonFictionBookList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    // hardcover fiction
    if (hardcoverFiction?.results) {
      setHardcoverFictionBookList(hardcoverFiction?.results?.books?.slice(0, 5));
    } else {
      console.error(`API error - ${hardcoverFiction}`)
      setHasError(true);
    }
    // hardcover non fiction
    if (hardcoverNonfiction?.results) {
      setHardcoverNonFictionBookList(hardcoverNonfiction?.results?.books?.slice(0, 5));
    } else {
      console.error(`API error - ${hardcoverNonfiction}`)
      setHasError(true);
    }

    // paperback non fiction
    if (paperbackNonfiction?.results) {
      setPaperbackNonFictionBookList(paperbackNonfiction?.results?.books?.slice(0, 5));
    } else {
      console.error(`API error - ${paperbackNonfiction}`)
      setHasError(true);
    }

  }, [hardcoverFiction, hardcoverNonfiction, paperbackNonfiction])

  if (hasError) {
    return <p>Error retrieving results, please try again in a few minutes... </p>
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

  const gridItemBreakpoint = showFavorites ? 9 : 12;

  return (
    <>
      <FavoritesToolBar setShowFavorites={setShowFavorites} showFavorites={showFavorites} />

      <Grid container>
        <Grid item xs={gridItemBreakpoint} lg={11}>

          <Grid item xs={12} sm={12} md={12}>
            <StyledSectionDivider text={" Hard Cover Fiction Top 5"} />
          </Grid>

          <Grid container item xs={12} sm={12} md={12}>
            <BookCardList bookList={hardcoverFictionBookList} updateFavorites={updateFavorites} favorites={favorites} />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <StyledSectionDivider text="Hard Cover Non Fiction Top 5" />
          </Grid>

          <Grid container item xs={12} sm={12} md={12}>
            <BookCardList bookList={hardcoverNonFictionBookList} updateFavorites={updateFavorites} favorites={favorites} />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <StyledSectionDivider text="Paperback Non Fiction Top 5" />
          </Grid>

          <Grid container item xs={12} sm={12} md={12}>
            <BookCardList bookList={paperbackNonFictionBookList} updateFavorites={updateFavorites} favorites={favorites} />
          </Grid>

        </Grid>

        {showFavorites &&
          <Grid item xs={2} lg={1}>
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

export default BooksPage