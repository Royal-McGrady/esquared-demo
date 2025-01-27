import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Form from './components/Forms.jsx';
import Dashboard from './pages/Dashboard.js';
import FoundersDashboard from './pages/FoundersDashboard';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route

const theme = createTheme();

function App() {
  return (
    <BrowserRouter>  {/* Wrap the application with BrowserRouter */}
        <ThemeProvider theme={theme}>
        <CssBaseline />
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>  {/* Define application routes */}
          <Route path="/" element={<HeroSection />} />  {/* HeroSection for the home route */}
          <Route path="/form" element={<Form />} />  {/* Forms for the /forms route */}
          <Route path="/dashboard" element={<Dashboard />} />  {/* Forms for the /forms route */}
          <Route path="/Founder/Dashboard" element={<FoundersDashboard />} />  {/* Forms for the /forms route */}
        </Routes>
        {/* Rest of your application content */}
      </div>
      </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;
