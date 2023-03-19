import React from 'react'
import StyledDivider from './StyledDivider'
import { Typography } from '@mui/material';

const StyledSectionDivider = ({text}) => {
  return (
    <StyledDivider sx={{ width: '100%' }}>
    <Typography variant="h5">
      {text}
    </Typography>
  </StyledDivider>
  )
}

export default StyledSectionDivider