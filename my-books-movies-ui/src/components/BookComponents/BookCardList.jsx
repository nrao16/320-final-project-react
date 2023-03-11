import React from 'react'
import BookCard from './BookCard';
import { Grid } from '@mui/material';

const BookCardList = ({bookList}) => {
    let bookListGrid = bookList.map((book) => {
        return (
            <Grid key={book.id} item xs={12} sm={6} md={4} lg={3} xl={2} >
                <BookCard book={book}
                />
            </Grid>
        )
    });
    return bookListGrid;
}

export default BookCardList