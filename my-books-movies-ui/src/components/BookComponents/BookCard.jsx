import React from 'react';
import { useState } from 'react';
import { Button, Card, CardHeader, CardActions, CardContent, CardMedia } from '@mui/material';
import { Typography, Box, Rating, Avatar, Tooltip } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { PropTypes } from 'prop-types';
import {BookModel} from '../../models/BookModel'

const BookCard = ({book}) => {
  return (
    <Box sx={{padding: 2, elevation: 8}}>
    <Card>
      <CardHeader
      titleTypographyProps={{
        fontSize: 15,
      }}
      subheaderTypographyProps={{
        fontSize: 12,
      }}
        title={book.title}
        subheader={book.author}
      />
      <CardMedia
        component="img"
        height="200"
        sx={{objectFit: "contain" }}
        
        src={book.book_image}
      />
      <CardContent>
      <Typography fontSize={12}>
        {book.description} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button  height="20" variant="contained">
         
        </Button>

      </CardActions>
    </Card>
  </Box>
  )
}

export default BookCard