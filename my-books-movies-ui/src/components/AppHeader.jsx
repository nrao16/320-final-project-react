import React from 'react'
import { AppBar, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

const AppHeader = ({title}) => {
  return (
    <AppBar position='static' elevation={0}>
    <Typography variant="h4" align='center' color="palegoldenrod">
        {title}
    </Typography>
</AppBar>
  )
}

AppHeader.propTypes = {
    title: PropTypes.string,
   }

   
export default AppHeader