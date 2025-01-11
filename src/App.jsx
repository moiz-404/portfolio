import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Use BrowserRouter and Routes

import Profile from './pages/Profile';
import Home from './pages/Home';
import PageNotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      {/* Use Routes and Route to define your paths */}
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        {/* Catch-all for undefined routes */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
