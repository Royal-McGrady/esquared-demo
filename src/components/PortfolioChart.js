// src/components/PortfolioChart.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { MenuItem, Select, FormControl, Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PortfolioChart = () => {
  const [comparisonType, setComparisonType] = useState('overall'); // State for comparison type

  // Data for overall portfolio
  const overallData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Data for portfolio by industry
  const industryData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Tech Industry',
        data: [30, 40, 50, 60, 70, 80, 90],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Healthcare Industry',
        data: [20, 30, 40, 50, 60, 70, 80],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
      {
        label: 'Finance Industry',
        data: [10, 20, 30, 40, 50, 60, 70],
        fill: false,
        borderColor: 'rgb(255, 206, 86)',
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Portfolio Performance Over Time',
      },
    },
  };

  return (
    <Box>
      {/* Dropdown to select comparison type */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <Select
          value={comparisonType}
          onChange={(e) => setComparisonType(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Select comparison type' }}
        >
          <MenuItem value="overall">Overall Portfolio</MenuItem>
          <MenuItem value="industry">By Industry</MenuItem>
        </Select>
      </FormControl>

      {/* Render the chart based on the selected comparison type */}
      <Line
        data={comparisonType === 'overall' ? overallData : industryData}
        options={options}
      />
    </Box>
  );
};

export default PortfolioChart;