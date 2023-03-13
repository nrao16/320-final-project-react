import React from 'react';
import { IconButton, Card, CardHeader, CardActions, CardContent, CardMedia } from '@mui/material';
import { Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BookCard = ({ book, handleFavorites, favoriteBooks }) => {
  const isInFavorites = () => {
    return favoriteBooks?.some(favBook => favBook.primary_isbn13 === book.primary_isbn13)
  };

  return (
    <Box padding={2}>
      <Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
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
          height="190"
          sx={{ objectFit: "contain" }}
          src={book.book_image}
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
          <Typography fontSize={12}>
            {book.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton sx={{ "& :hover": { color: "red" } }}
            aria-label="add or remove favorites"
            onClick={() => handleFavorites(book)}
          >
            {isInFavorites() ?
              <FavoriteIcon color="primary" />
              :
              <FavoriteBorderIcon color="primary" />
            }
          </IconButton>

        </CardActions>
      </Card>
    </Box>
  )
}

export default BookCard