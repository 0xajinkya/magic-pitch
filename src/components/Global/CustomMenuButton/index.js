import { ExpandMore } from '@mui/icons-material';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'

const CustomMenuButton =  ({ text, styles }) => {

  const [open, setOpen] = useState();
  const [anchorEl, setAnchorEl] = useState();

  const handleClick = (e) => {
    setOpen(true)
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  }

  return (
    <>
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: "black",
          borderRadius: "30px",
          ...styles,
        }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            textTransform: "none",
            fontFamily: "Montserrat",
            fontWeight: 600,
            mr: "5px"
          }}
        >
          {text}
        </Typography>
        <ExpandMore 
          sx={{
            fontSize: '14px'
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </>
  )
}

export default CustomMenuButton
