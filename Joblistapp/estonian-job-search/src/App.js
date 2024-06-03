import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, About, JobsList, JobDetails, NotFound } from './pages';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
