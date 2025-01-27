// src/components/Card.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { TrendingUp as TrendingUpIcon, TrendingDown as TrendingDownIcon } from '@mui/icons-material';

const CardComponent = ({ title, value, subtitle, isPositive }) => {
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" component="div" sx={{ marginRight: 1 }}>
            {value}
          </Typography>
          {isPositive ? (
            <TrendingUpIcon sx={{ color: 'green' }} />
          ) : (
            <TrendingDownIcon sx={{ color: 'red' }} />
          )}
        </Box>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;