import React from 'react';
import { Box, Toolbar, Button } from '@mui/material';

const FavoritesToolBar = ({setShowFavorites, showFavorites}) => {
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

export default FavoritesToolBar;