import React from 'react';
import { IconButton, Card, CardHeader, CardActions, CardContent, CardMedia } from '@mui/material';
import { Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MovieCard = ({ movie, handleFavorites, favoriteMovies }) => {
  const isInFavorites = () => {
    return favoriteMovies?.some(favMovie => favMovie.display_title === movie.display_title)
  };

  return (
    <Box padding={1}>
      <Card>
        <CardHeader
          titleTypographyProps={{
            fontSize: 15,
          }}
          subheaderTypographyProps={{
            fontSize: 12,
          }}
          title={movie.display_title}
          subheader={movie.headline}
        />
        <CardMedia
          component="img"
          height="180"
          sx={{ objectFit: "contain" }}
          src={movie.multimedia.src}
        />
        <CardContent >
          <Typography fontSize={12}>
            {movie.summary_short}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton sx={{ "& :hover": { color: "red" } }}
            aria-label="add or remove favorites"
            onClick={() => handleFavorites(movie)}
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

export default MovieCard