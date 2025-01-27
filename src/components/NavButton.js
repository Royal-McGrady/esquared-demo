// src/components/NavButton.js
import React from 'react';
import Button from '@mui/material/Button';

const NavButton = ({ title }) => {
  return (
    <Button variant="contained" sx={{ margin: 1 }}>
      {title}
    </Button>
  );
};

export default NavButton;