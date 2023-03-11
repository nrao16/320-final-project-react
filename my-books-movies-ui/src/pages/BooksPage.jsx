import React from 'react'
import {  Grid } from '@mui/material';
import BookCardList from '../components/BookComponents/BookCardList';
import invokeRESTApi from '../services/invokeRESTApi';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const url = `${process.env.REACT_APP_NYT_API_BASE_URL}/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`;
  return invokeRESTApi(url);
  // const url = new URL(`${process.env.REACT_APP_SWAPI_BASE_URL}`);
  // return fetch(url.href)
  //   .then(response => response.json())
  //   .catch((error) => {
  //     console.error(error);
  //     return new Response(null, {
  //       status: 500,
  //       statusText: 'Internal Server Error',
  //     });
  //   });
}


const BooksPage = () => {
    const apiData = useLoaderData();
    let [bookList, setBookList] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        console.debug(apiData);
        if (apiData?.results) {
            // let newBookList = [];
            // apiData?.results?books?.map((book) =>
            // newBookList.push(book)
            // )
            setBookList(apiData?.results?.books);
        } else {
            console.error(`API error - ${apiData}`)
            setHasError(true);
        }

    }, [apiData])

    if (hasError) {
        return <p>Error!</p>
    }


    // useEffect(() => {
    //     const url = `${process.env.REACT_APP_NYT_API_BASE_URL}/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`;
    //     invokeRESTApi(url)
    //         .then(resultsJson => {
    //             !resultsJson?.errorMsg && setBookList(resultsJson.results.books)
    //         }
    //         )
    // }, []);


    const bookFavoritesExist = false;
    const gridItemBreakpoint = bookFavoritesExist ? 10 : 12;
    return (
        <Grid container spacing={1}>

            <Grid container item xs={gridItemBreakpoint} sm={gridItemBreakpoint} md={gridItemBreakpoint}>
                <BookCardList bookList={bookList} />
            </Grid>

            {/* {cartRentalsExist &&
      <Grid container item xs={2} sm={2} md={2}>
        <Box>
          <Grid container direction="column">
            <CartHeaderBar />
            <Grid item>
              <VacRentalCartGridList cartRentals={cartRentals} removeFromCart={removeFromCart} />
            </Grid>
            <Divider></Divider>
            <Grid item>
              <Stack>
                <CartTotalCard totalCost={calculateCartTotal()} />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    } */}

        </Grid>
    )
}

export default BooksPage