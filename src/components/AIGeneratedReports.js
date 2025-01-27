// src/components/AIGeneratedReports.js
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { PieChart, BarChart, LineChart, FunnelChart } from '../components/Charts'; // Import custom chart components

const AIGeneratedReports = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        AI Generated Reports
      </Typography>

      <Grid container spacing={3}>
        {/* Portfolio Health Report */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Portfolio Health Report
            </Typography>
            <Typography variant="body2" gutterBottom>
              Overview of the health of your portfolio companies.
            </Typography>
            <PieChart
              data={{
                labels: ['Active', 'Exited', 'At Risk'],
                datasets: [
                  {
                    data: [70, 20, 10],
                    backgroundColor: ['#4CAF50', '#FFA500', '#FF5252'],
                  },
                ],
              }}
            />
          </Paper>
        </Grid>

        {/* Industry Performance Report */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Industry Performance Report
            </Typography>
            <Typography variant="body2" gutterBottom>
              Performance of investments by industry.
            </Typography>
            <BarChart
              data={{
                labels: ['Tech', 'Healthcare', 'Finance', 'Consumer'],
                datasets: [
                  {
                    label: 'ROI (%)',
                    data: [25, 18, 22, 15],
                    backgroundColor: '#4CAF50',
                  },
                ],
              }}
            />
          </Paper>
        </Grid>

        {/* Deal Flow Analysis */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Deal Flow Analysis
            </Typography>
            <Typography variant="body2" gutterBottom>
              Analysis of the deal flow pipeline.
            </Typography>
            <FunnelChart
              data={{
                labels: ['In Progress', 'Closed', 'Lost'],
                datasets: [
                  {
                    label: 'Deals',
                    data: [50, 30, 20],
                    backgroundColor: ['#4CAF50', '#FFA500', '#FF5252'],
                  },
                ],
              }}
            />
          </Paper>
        </Grid>

        {/* Investor Sentiment Report */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Investor Sentiment Report
            </Typography>
            <Typography variant="body2" gutterBottom>
              Tracking investor sentiment and engagement.
            </Typography>
            <LineChart
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    label: 'Satisfaction (%)',
                    data: [75, 80, 85, 82, 88, 90],
                    borderColor: '#4CAF50',
                    fill: false,
                  },
                ],
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AIGeneratedReports;