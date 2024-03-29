import React from 'react'
import { Box, Grid } from '@mui/material';
import BookCardList from '../components/BookComponents/BookCardList';
import FavoritesToolBar from '../components/FavoriteComponents/FavoritesToolBar';
import FavoritesList from '../components/FavoriteComponents/FavoritesList';
import StyledSectionDivider from '../components/common/StyledSectionDivider';
import invokeRESTApi from '../services/invokeRESTApi';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import booksAndMoviesRepo from '../repo/booksAndMoviesRepo';

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
  const { addRepoItem, removeRepoItem, getRepoItemsForUser } = booksAndMoviesRepo();
  const currentUser = "nanrao";
  const dbBookCollection = "favorite-books";

  const getFavoriteBookItems = async () => {
    const favoriteBookItems = await getRepoItemsForUser(currentUser, dbBookCollection);
    //console.log(`favoriteBookItems--${JSON.stringify(favoriteBookItems)}`);
    setFavorites(favoriteBookItems);
  }

  if (favorites.length === 0) {
    getFavoriteBookItems().catch(console.error);
  }

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
  const addToFavorites = async (book) => {
    await addRepoItem(book, currentUser, dbBookCollection);

    setFavorites(prevFavorites => {
      let newList = [...prevFavorites];
      newList.push(book);
      return newList;
    }
    );
  }

  const removeFromFavorites = async (book) => {
    await removeRepoItem(book, currentUser, dbBookCollection);

    setFavorites(prevFavorites => {
      let newList = prevFavorites.filter(currentBook =>
        currentBook.id !== book.id
      )
      return newList;
    });

  }

  const gridItemXSBreakpoint = showFavorites ? 8 : 12;
  const gridItemMdBreakpoint = showFavorites ? 10 : 12
  const gridItemLgBreakpoint = showFavorites ? 10.75 : 12

  return (
    <>
      <FavoritesToolBar setShowFavorites={setShowFavorites} showFavorites={showFavorites} />

      <Grid container>
        <Grid item xs={gridItemXSBreakpoint} md={gridItemMdBreakpoint} lg={gridItemLgBreakpoint}>

          <Grid item xs={12} sm={12} md={12}>
            <StyledSectionDivider text={" Hardcover Fiction Top 5"} />
          </Grid>

          <Grid container item xs={12} sm={12} md={12}>
            <BookCardList bookList={hardcoverFictionBookList} updateFavorites={updateFavorites} favorites={favorites} />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <StyledSectionDivider text="Hardcover Nonfiction Top 5" />
          </Grid>

          <Grid container item xs={12} sm={12} md={12}>
            <BookCardList bookList={hardcoverNonFictionBookList} updateFavorites={updateFavorites} favorites={favorites} />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <StyledSectionDivider text="Paperback Nonfiction Top 5" />
          </Grid>

          <Grid container item xs={12} sm={12} md={12}>
            <BookCardList bookList={paperbackNonFictionBookList} updateFavorites={updateFavorites} favorites={favorites} />
          </Grid>

        </Grid>

        {showFavorites &&
          <Grid item xs={12-gridItemXSBreakpoint} md={12-gridItemMdBreakpoint} lg={12-gridItemLgBreakpoint}>
            <Box >
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