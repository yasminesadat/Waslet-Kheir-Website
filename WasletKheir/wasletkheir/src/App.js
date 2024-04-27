import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin'; // import your AdminLogin component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin/>} />
        <Route path="/Home" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;