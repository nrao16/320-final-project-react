import React from 'react'
import { Box, Grid, Stack, createTheme, ThemeProvider, Divider } from '@mui/material';
import BookCard from '../components/BookComponents/BookCard'
import BookCardList from '../components/BookComponents/BookCardList'

const BooksPage = () => {
    const bookList = [{title: "My book"}, {title: "My book"}, {title: "My book"}];
    const bookFavoritesExist = false;
    const gridItemBreakpoint = bookFavoritesExist ? 10 : 12;
  return (
    <Grid container spacing={4}>

    <Grid container item xs={gridItemBreakpoint} sm={gridItemBreakpoint} md={gridItemBreakpoint}
    >
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