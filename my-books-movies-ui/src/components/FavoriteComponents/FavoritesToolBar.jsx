import React from 'react';
import { Box, Toolbar, Button } from '@mui/material';
import { PropTypes } from 'prop-types';

const FavoritesToolBar = ({ setShowFavorites, showFavorites }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Button color="inherit"
          variant="text"
          onClick={() => setShowFavorites(!showFavorites)}
          sx={{ textTransform: "capitalize", marginLeft: "auto" }}
        >
          {!showFavorites ? "Show My Favorites" : "Hide My Favorites"}
        </Button>
      </Toolbar>
    </Box>
  )
}

FavoritesToolBar.propTypes = {
  setShowFavorites: PropTypes.func,
  showFavorites: PropTypes.bool.isRequired,
};

export default FavoritesToolBar;