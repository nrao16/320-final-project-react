import React from 'react';
import { useState } from 'react';
import { Button, Card, CardHeader, CardActions, CardContent, CardMedia } from '@mui/material';
import { Typography, Box, Rating, Avatar, Tooltip } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { PropTypes } from 'prop-types';
import {BookModel} from '../../models/BookModel'

const BookCard = ({book}) => {
  return (
    <Box sx={{padding: 2, elevation: 8,  height: "100%"}}>
    <Card>
      <CardHeader
      titleTypographyProps={{
        fontSize: 18,
      }}
      subheaderTypographyProps={{
        fontSize: 12,
      }}
        title={book.title}
        subheader={book.author}
      />
      <CardMedia
        component="img"
        height={book.book_image_height}
        width={book.book_image_width}
        src={book.book_image}
      />
      <CardContent>
      <Typography fontSize={14}>
        {book.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">
         
        </Button>

      </CardActions>
    </Card>
  </Box>
  )
}

export default BookCard