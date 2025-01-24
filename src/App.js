import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Form from './components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route

function App() {
  return (
    <BrowserRouter>  {/* Wrap the application with BrowserRouter */}
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>  {/* Define application routes */}
          <Route path="/" element={<HeroSection />} />  {/* HeroSection for the home route */}
          <Route path="/form" element={<Form />} />  {/* Forms for the /forms route */}
        </Routes>
        {/* Rest of your application content */}
      </div>
    </BrowserRouter>
  );
}

export default App;
