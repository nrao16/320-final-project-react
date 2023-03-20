import React from 'react';
import { IconButton, Card, CardHeader, CardActions, CardContent, CardMedia, Avatar } from '@mui/material';
import { Box, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NowrapPopoverText from '../common/NowrapPopoverText';
import { blueGrey } from '@mui/material/colors';

const BookCard = ({ book, updateFavorites, favorites }) => {
  const isInFavorites = () => {
    return favorites?.some(favItem => favItem.id === book.primary_isbn13)
  };

  const numberAvatar = (number) => {
    return (<Avatar sx={{ bgcolor: blueGrey[500] }}>#{number}</Avatar>)
  }

  return (
    <Box padding={1}>
      <Card sx={{ maxHeight: 400 }}>
        <CardHeader
          avatar={numberAvatar(book.rank)}
          titleTypographyProps={{
            fontSize: 15,
            noWrap: true
          }}
          subheaderTypographyProps={{
            fontSize: 13,
            noWrap: true
          }}
          title={book.title}
          subheader={book.author}
        />
        <CardMedia
          component="img"
          sx={{ height: 140, objectFit: "contain" }}
          src={book.book_image}
          alt="Book image"
        />
        <CardContent>
          <NowrapPopoverText fontSize={12} popoverText={book.description} />
        </CardContent>
        <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
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

          <Tooltip title="Weeks on Best Seller list">
            <Box sx={{ ml: 2 }}>
              {book.weeks_on_list}W
            </Box>
          </Tooltip>
        </CardActions>
      </Card>
    </Box>
  )
}

export default BookCard