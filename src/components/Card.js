// src/components/Card.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { TrendingUp as TrendingUpIcon, TrendingDown as TrendingDownIcon } from '@mui/icons-material';

const CardComponent = ({ title, children, value, subtitle, isPositive }) => {
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        {title && (
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        )}
        {value !== undefined && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" component="div" sx={{ marginRight: 1 }}>
              {value}
            </Typography>
            {isPositive !== undefined && (
              isPositive ? (
                <TrendingUpIcon sx={{ color: 'green' }} />
              ) : (
                <TrendingDownIcon sx={{ color: 'red' }} />
              )
            )}
          </Box>
        )}
        {subtitle && (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {subtitle}
          </Typography>
        )}
        {children && <Box>{children}</Box>}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
