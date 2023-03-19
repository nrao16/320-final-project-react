import React from 'react';
import { IconButton, Card, CardHeader, CardActions, CardContent, CardMedia } from '@mui/material';
import { Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BookCard = ({ book, updateFavorites, favorites }) => {
  const isInFavorites = () => {
    return favorites?.some(favItem => favItem.id === book.primary_isbn13)
  };

  return (
    <Box padding={1}>
      <Card sx={{ maxWidth: 350, maxHeight:400 }}>
        <CardHeader
          titleTypographyProps={{
            fontSize: 15,
            noWrap: true
          }}
          subheaderTypographyProps={{
            fontSize: 12,
            noWrap: true
          }}
          title={book.title}
          subheader={book.author}
        />
        <CardMedia
          component="img"
          sx={{ height: 140, objectFit:"contain"}}
          src={book.book_image}
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
          <Typography fontSize={12} noWrap>
            {book.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton sx={{ "& :hover": { color: "red" } }}
            aria-label="add or remove favorites"
            onClick={() => updateFavorites({
              "id": book.primary_isbn13,
              "title": book.title,
              "subHeader": book.author,
              "img": book.book_image
            })}
          >
            {isInFavorites() ?
              <FavoriteIcon fontSize="large" color="primary" />
              :
              <FavoriteBorderIcon fontSize="large" color="primary" />
            }
          </IconButton>

        </CardActions>
      </Card>
    </Box>
  )
}

export default BookCard