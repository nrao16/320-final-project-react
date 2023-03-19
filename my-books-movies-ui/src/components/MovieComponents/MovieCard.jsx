import React from 'react';
import { IconButton, Card, CardHeader, CardActions, CardContent, CardMedia } from '@mui/material';
import { Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MovieCard = ({ movie, updateFavorites, favorites }) => {
  const isInFavorites = () => {
    return favorites?.some(favItem => favItem.id === movie.display_title)
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
          title={movie.display_title}
          subheader={movie.headline}
        />
        <CardMedia
          component="img"
          sx={{ height: 140, objectFit:"contain"}}
          src={movie.multimedia.src}
        />
        <CardContent>
          <Typography fontSize={12} noWrap>
            {movie.summary_short}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton sx={{ "& :hover": { color: "red" } }}
            aria-label="add or remove favorites"
            onClick={() => {
              updateFavorites({
                "id": movie.display_title,
                "title": movie.display_title,
                "subHeader": movie.headline,
                "img": movie.multimedia.src
              })
            }}
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

export default MovieCard