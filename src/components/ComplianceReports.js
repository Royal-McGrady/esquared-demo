// src/components/ComplianceReports.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ComplianceReports = () => {
  const reports = [
    'Q1 2023 Compliance Report',
    'Q2 2023 Compliance Report',
    'Q3 2023 Compliance Report',
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Compliance Reports
      </Typography>
      <List>
        {reports.map((report, index) => (
          <ListItem key={index}>
            <ListItemText primary={report} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ComplianceReports;