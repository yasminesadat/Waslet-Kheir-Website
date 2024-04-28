import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin'; // import your AdminLogin component
import RegisterDonor from './components/RegisterDonor';
import OrgMainPage from './components/OrgMainPage';
import OrgProfile from './components/OrgProfile';
import WelcomePage from './components/WelcomePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/OrgMain" element={<OrgMainPage />} />
        <Route path="/OrgProfile" element={<OrgProfile />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/RegisterDonor" element={<RegisterDonor />} />

      </Routes>
    </Router>
  );
}

export default App;