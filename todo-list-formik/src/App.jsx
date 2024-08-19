import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home/Home.jsx';

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<div>Контакти</div>} />
            <Route path="/about" element={<div>Про мене</div>} />
        </Routes>
    </Router>
);

export default App;
