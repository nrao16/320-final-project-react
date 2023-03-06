import React from 'react'
import BookCard from './BookCard';
import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';

const BookCardList = ({bookList}) => {
    console.log(bookList)
    let bookListGrid = bookList.map((book) => {
        return (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
                <BookCard
                    book={book}
                />
            </Grid>
        )
    });
    return bookListGrid;
}

export default BookCardList