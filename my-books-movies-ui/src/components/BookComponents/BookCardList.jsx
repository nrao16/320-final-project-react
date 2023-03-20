import React from 'react'
import BookCard from './BookCard';
import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';

const BookCardList = ({ bookList, updateFavorites, favorites }) => {
    let bookListGrid = bookList.map((book) => {
        return (
            <Grid item xs={12 / 5} key={book.primary_isbn13} >
                <BookCard book={book}
                    updateFavorites={updateFavorites}
                    favorites={favorites}
                />
            </Grid>
        )
    });
    return bookListGrid;
}

BookCardList.propTypes = {
    bookList: PropTypes.array,
    updateFavorites: PropTypes.func,
    favorites: PropTypes.array
};

export default BookCardList