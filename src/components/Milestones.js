// src/components/Milestones.js
import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const Milestones = () => {
  const milestones = [
    { name: 'Seed Round', progress: 80 },
    { name: 'Series A', progress: 50 },
    { name: 'Series B', progress: 20 },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Funding Milestones
      </Typography>
      {milestones.map((milestone, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="body1">{milestone.name}</Typography>
          <LinearProgress variant="determinate" value={milestone.progress} />
        </Box>
      ))}
    </Box>
  );
};

export default Milestones;