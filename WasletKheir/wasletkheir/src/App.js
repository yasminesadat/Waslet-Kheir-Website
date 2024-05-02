import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin'; // import your AdminLogin component
import Form from "./components/RegFormOrg";
import WelcomePage from "./components/WelcomePage";
import TabsComponent from "./components/SwitchTabs";
import RegisterD from "./components/RegisterD";
import OrgMainPage from "./components/Organization/OrgMainPage";
import OrgProfile from './components/Organization/OrgProfile';
import OrgViewDon from './components/Organization/OrgViewDon';
import OrgReqDon from './components/Organization/OrgReqDon';
import OrgReqServ from './components/Organization/OrgReqServ';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/OrgMain" element={<OrgMainPage />} />
        <Route path="/OrgProfile" element={<OrgProfile />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Register" element={<TabsComponent />} />
        <Route path="/RegisterD" element={<RegisterD />} />
        <Route path="/RegisterO" element={<Form />} />
        <Route path="/OrgViewDon" element={<OrgViewDon />} />
        <Route path="/OrgReqDon" element={<OrgReqDon />} />
        <Route path="/OrgReqServ" element={<OrgReqServ />} />



      </Routes>
    </Router>
  );
}

export default App;