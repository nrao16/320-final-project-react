import React from 'react';
import { useState } from 'react';
import { Button, Card, CardHeader, CardActions, CardContent, CardMedia } from '@mui/material';
import { Typography, Box, Rating, Avatar, Tooltip } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { PropTypes } from 'prop-types';
import {BookModel} from '../../models/BookModel'

const BookCard = ({book}) => {
  return (
    <Box>
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        title="Book Title"
      />
      <CardMedia
        component="img"
        height="300"
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
      <Typography variant="h5">
        My book description
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
        <Button variant="contained">
         
        </Button>

      </CardActions>
    </Card>
  </Box>
  )
}

export default BookCard