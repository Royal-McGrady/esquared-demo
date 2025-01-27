// src/components/Charts.js
import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// PieChart Component
export const PieChart = ({ data }) => {
  return (
    <Pie
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Portfolio Health',
          },
        },
      }}
    />
  );
};

// BarChart Component
export const BarChart = ({ data }) => {
  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Industry Performance',
          },
        },
      }}
    />
  );
};

// LineChart Component
export const LineChart = ({ data }) => {
  return (
    <Line
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Investor Sentiment',
          },
        },
      }}
    />
  );
};

// FunnelChart Component
export const FunnelChart = ({ data }) => {
  return (
    <Bar
      data={data}
      options={{
        indexAxis: 'y', // Horizontal bar chart for funnel effect
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Deal Flow Analysis',
          },
        },
      }}
    />
  );
};