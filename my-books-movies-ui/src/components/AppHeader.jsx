import React from 'react'
import { AppBar, Typography, Toolbar, Box, Button, IconButton } from '@mui/material';
import { PropTypes } from 'prop-types';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { NavLink } from 'react-router-dom';

const AppHeader = ({ title }) => {
  const handleLogin = () => {
    console.log("Logging in...");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky' color="" disablegutters='true'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <NavLink to="/">
            <Button color="inherit"
              variant="text"
              sx={{ textTransform: "capitalize" }}
            >
              Home
            </Button>
          </NavLink>

          <NavLink to="/books">
            <Button color="inherit"
              variant="text"
              sx={{ textTransform: "capitalize" }}
            >
              Books
            </Button>
          </NavLink>

          <NavLink to="/movies">
            <Button color="inherit"
              variant="text"
              sx={{ textTransform: "capitalize" }}
            >
              Movies
            </Button>
          </NavLink>

          <IconButton size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleLogin}
          >
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

AppHeader.propTypes = {
  title: PropTypes.string,
}


export default AppHeader