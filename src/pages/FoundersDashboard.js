// src/pages/FoundersDashboard.js
import React from 'react';
import { Grid, Box } from '@mui/material';
import FounderProfile from '../components/FounderProfile';
import InvestorUpdates from '../components/InvestorUpdates';
import NonMonetarySupport from '../components/NonMonetarySupport';
import AIAdvisor from '../components/AIAdvisor';
import Milestones from '../components/Milestones';
import ComplianceReports from '../components/ComplianceReports';
import Calendar from '../components/Calendar';

const FoundersDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FounderProfile />
        </Grid>
        <Grid item xs={12} md={6}>
          <InvestorUpdates />
        </Grid>
        <Grid item xs={12} md={4}>
          <NonMonetarySupport />
        </Grid>
        <Grid item xs={12} md={4}>
          <AIAdvisor />
        </Grid>
        <Grid item xs={12} md={4}>
          <Milestones />
        </Grid>
        <Grid item xs={12} md={6}>
          <ComplianceReports />
        </Grid>
        <Grid item xs={12} md={6}>
          <Calendar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoundersDashboard;