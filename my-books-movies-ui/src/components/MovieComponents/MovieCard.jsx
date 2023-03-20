import React from 'react';
import { IconButton, Tooltip, Card, CardHeader, CardActions, Link, CardContent, CardMedia, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NowrapPopoverText from '../common/NowrapPopoverText';
import { PropTypes } from 'prop-types';

const MovieCard = ({ movie, updateFavorites, favorites }) => {
  const isInFavorites = () => {
    return favorites?.some(favItem => favItem.id === movie.display_title)
  };

  return (
    <Box padding={1}>
      <Card sx={{ maxWidth: 450, maxHeight: 400 }}>
        <CardHeader
          titleTypographyProps={{
            fontSize: 15,
            noWrap: true
          }}
          subheaderTypographyProps={{
            fontSize: 12,
            noWrap: true,
          }}
          title={movie.display_title}
          subheader={movie.headline}
        />
        <CardMedia
          component="img"
          alt="Movie image"
          sx={{ height: 140, objectFit: "contain" }}
          src={movie.multimedia.src}
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
          <NowrapPopoverText fontSize={12} popoverText={movie.summary_short} />
        </CardContent>
        <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', direction: 'row' }}>
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

          <Tooltip title={movie.link.suggested_link_text}>
            <Box sx={{ ml: 2 }}>
              <Link
                href={movie.link.url} variant="body2"
                target="_blank"
                rel="noopener"
                alt="Movie review article"
              >
                Review
              </Link>
            </Box>
          </Tooltip>
        </CardActions>
      </Card>
    </Box>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    display_title: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    multimedia: PropTypes.shape({
      src: PropTypes.string,
    }),
    link: PropTypes.shape({
      suggested_link_text: PropTypes.string,
      url: PropTypes.string,
    }),
  }),
  updateFavorites: PropTypes.func,
  favorites: PropTypes.array
}

export default MovieCard