import React from 'react'
import BookCard from './BookCard';
import { Grid } from '@mui/material';

const BookCardList = ({ bookList, updateFavorites, favorites }) => {
    let bookListGrid = bookList.map((book) => {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={book.primary_isbn13} >
                <BookCard book={book}
                    updateFavorites={updateFavorites}
                    favorites={favorites}
                />
            </Grid>
        )
    });
    return bookListGrid;
}

export default BookCardList