// src/pages/Dashboard.js
import React from 'react';
import CardComponent from '../components/Card';
import PortfolioChart from '../components/PortfolioChart';
import NavButton from '../components/NavButton';
import AIGeneratedReports from '../components/AIGeneratedReports';
import ChatToAI from '../components/ChatToAI';
import { Grid, Box, Typography, TextField, Paper, List, ListItem, ListItemText } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import './UI/Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  // Example data for notifications and recent activity
  const notifications = [
    { id: 1, text: 'New deal closed with Company X', time: '2 hours ago' },
    { id: 2, text: 'Performance report for Q1 2023 is ready', time: '1 day ago' },
  ];

  const recentActivities = [
    { id: 1, text: 'Updated portfolio valuation', time: '3 hours ago' },
    { id: 2, text: 'Added new company to portfolio', time: '5 hours ago' },
  ];

  return (
    <Box className="dashboard-container"> {/* Ensure this class is applied */}
      <Grid container spacing={3}>
        {/* Search Bar */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Search deals, companies, or reports..."
            InputProps={{
              startAdornment: <SearchIcon sx={{ marginRight: 1, color: 'action.active' }} />,
            }}
          />
        </Grid>

        {/* Navigation Buttons */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <NavButton title="Deals" />
            <NavButton title="Companies" />
            <NavButton title="Venture Builder" />
            <NavButton title="Performance Reports" />
          </Box>
        </Grid>

        {/* Cards with Positive/Negative Indicators */}
        <Grid item xs={12} md={3}>
          <CardComponent
            title="Total Investments"
            value="R120M"
            subtitle="Across 30 Deals"
            isPositive={true} // Green indicator for positive
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardComponent
            title="Active Companies"
            value="25"
            subtitle="In Portfolio"
            isPositive={true} // Green indicator for positive
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardComponent
            title="Exits"
            value="5"
            subtitle="Successful Exits"
            isPositive={true} // Green indicator for positive
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardComponent
            title="IRR"
            value="22%"
            subtitle="Annualized Return"
            isPositive={true} // Green indicator for positive
          />
        </Grid>

        {/* Portfolio Chart */}
        <Grid item xs={12}>
          <PortfolioChart />
        </Grid>

        {/* AI Generated Reports */}
        <Grid item xs={12}>
          <AIGeneratedReports />
        </Grid>

        {/* Chat to AI */}
        <Grid item xs={12}>
          <ChatToAI />
        </Grid>

        {/* Notifications Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              <NotificationsIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
              Notifications
            </Typography>
            <List>
              {notifications.map((notification) => (
                <ListItem key={notification.id}>
                  <ListItemText
                    primary={notification.text}
                    secondary={notification.time}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Recent Activity Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              <TrendingUpIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
              Recent Activity
            </Typography>
            <List>
              {recentActivities.map((activity) => (
                <ListItem key={activity.id}>
                  <ListItemText
                    primary={activity.text}
                    secondary={activity.time}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;