import React from 'react'
import StyledDivider from './StyledDivider'
import { Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

const StyledSectionDivider = ({text}) => {
  return (
    <StyledDivider sx={{ width: '100%' }}>
    <Typography variant="h5">
      {text}
    </Typography>
  </StyledDivider>
  )
}

StyledSectionDivider.propTypes = {
  text: PropTypes.string,
};


export default StyledSectionDivider