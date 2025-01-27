// src/components/NonMonetarySupport.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const NonMonetarySupport = () => {
  const supportOptions = [
    'Mentorship Sessions',
    'Legal Advice',
    'Marketing Support',
    'HR and Recruitment',
    'Technical Consulting',
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Non-Monetary Support
      </Typography>
      <List>
        {supportOptions.map((option, index) => (
          <ListItem key={index}>
            <ListItemText primary={option} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NonMonetarySupport;