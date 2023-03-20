import React from 'react';
import { Popover, Typography } from '@mui/material';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

const NowrapPopoverText = ({ fontSize, popoverText }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Typography fontSize={fontSize} noWrap
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}> {popoverText}</Typography>
      </Popover>
      {popoverText}
    </Typography>
  )
}

NowrapPopoverText.propTypes = {
  fontSize: PropTypes.number.isRequired,
  popoverText: PropTypes.string.isRequired,
};


export default NowrapPopoverText