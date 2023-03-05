import React from 'react'
import { AppBar, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

const AppHeader = ({title}) => {
  return (
    <AppBar position='sticky' elevation={8}>
    <Typography variant="h4" align='center' color="">
        {title}
    </Typography>
</AppBar>
  )
}

AppHeader.propTypes = {
    title: PropTypes.string,
   }

   
export default AppHeader