import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import OrgView2 from './components/Organization/OrgView2';
import OrgView1 from './components/Organization/OrgView1';
import OrgView3 from './components/Organization/OrgView3';
import Home from './components/Donor/Home';
import DonorProfile from './components/Donor/DonorProfile';
import OrgViewServ from './components/Organization/OrgViewServ';
import DonorHistory from './components/Donor/DonorHistory';
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
        <Route path="/OrgView2" element={<OrgView2 />} />
        <Route path="/OrgView3" element={<OrgView3 />} />
        <Route path="/OrgView1" element={<OrgView1 />} />
        <Route path="/DonorProfile" element={<DonorProfile />} />
        <Route path="/OrgViewServ" element={<OrgViewServ />} />







      </Routes>
    </Router>
  );
}

export default App;