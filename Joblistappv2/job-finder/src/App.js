import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import JobSearchResults from './pages/JobSearchResults';
import JobPage from './pages/JobPage';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/search-results" element={<JobSearchResults />} />
                    <Route path="/job/:id" element={<JobPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
