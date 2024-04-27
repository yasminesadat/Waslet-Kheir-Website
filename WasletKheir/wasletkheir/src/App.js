import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin'; // import your AdminLogin component
import RegisterDonor from './components/RegisterDonor';
import OrgMainPage from './components/OrgMainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterDonor />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/OrgMain" element={<OrgMainPage />} />

      </Routes>
    </Router>
  );
}

export default App;