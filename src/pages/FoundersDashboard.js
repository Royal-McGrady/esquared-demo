// src/pages/FoundersDashboard.js
import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FounderProfile from '../components/FounderProfile';
import InvestorUpdates from '../components/InvestorUpdates';
import NonMonetarySupport from '../components/NonMonetarySupport';
import AIAdvisor from '../components/AIAdvisor';
import Milestones from '../components/Milestones';
import ComplianceReports from '../components/ComplianceReports';
import Calendar from '../components/Calendar';
import FundingStatusCard from '../pages/UI/Founder Dashboard/FundingStatusCard';
import RunwayCard from '../pages/UI/Founder Dashboard/RunwayCard';
import UserGrowthCard from '../pages/UI/Founder Dashboard/UserGrowthCard';
import RevenueCard from '../pages/UI/Founder Dashboard/RevenueCard';
import LineChart from '../pages/UI/Founder Dashboard/LineChart';

const FoundersDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <FundingStatusCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <RunwayCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <UserGrowthCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <RevenueCard />
        </Grid>
        <Grid item xs={12}>
          <LineChart />
        </Grid>
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