import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './components/Pages/HomePage';
import NotFound from './components/Pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/Layout/ScrollToTop';
import Layout from './components/Layout/Layout';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <h3>Loading Portfolio...</h3>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </>
  );
};

export default App;
