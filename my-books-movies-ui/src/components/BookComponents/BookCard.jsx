import React from 'react';
import { Button, Card, CardHeader, CardActions, CardContent, CardMedia } from '@mui/material';
import { Typography, Box } from '@mui/material';

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