import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from "./components/RegFormOrg";
import WelcomePage from "./components/WelcomePage";
import RegisterD from "./components/RegisterD";
import OrgMainPage from "./components/Organization/OrgMainPage";
import OrgProfile from './components/Organization/OrgProfile';
import OrgViewDon from './components/Organization/OrgViewDon';
import OrgReqDon from './components/Organization/OrgReqDon';
import OrgReqServ from './components/Organization/OrgReqServ';
import OrgView2 from './components/Organization/OrgView2';
import OrgView1 from './components/Organization/OrgView1';
import OrgView3 from './components/Organization/OrgView3';
import OrgView4 from './components/Organization/OrgView4';
import Home from './components/Donor/Home';
import DonorProfile from './components/Donor/DonorProfile';
import OrgViewServ from './components/Organization/OrgViewServ';
import DonorHistory from './components/Donor/DonorHistory';
import OrgMain2 from './components/Organization/OrgMain2'
import OrgUpd1 from './components/Organization/OrgUpd1';
import OrgUpd11 from './components/Organization/OrgUpd11';
import OrgUpd2 from './components/Organization/OrgUpd2';
import OrgUpd22 from './components/Organization/OrgUpd22';
import OrgDel1 from './components/Organization/OrgDel1';
import OrgDel2 from './components/Organization/OrgDel2';
import OrgDel3 from './components/Organization/OrgDel3';
import OrgDel4 from './components/Organization/OrgDel4';
import AdminLogin from './components/Admin/Login';
import AdminPage from './components/Admin/Dashboard';
import ViewSubmission from './components/Admin/ViewSubmission';
import AdminOrgRequests from './components/Admin/OrgRequests';
import AdminDeletedOrgRequest from './components/Admin/DeletedOrgRequest';
import AdminVolRequests from './components/Admin/VolunteerRequests';
import AdminDeletedVolRequests from './components/Admin/DeletedVolRequest';
import AdminOrgAccounts from './components/Admin/OrgAccounts';
import AdminVolAccounts from './components/Admin/VolunteerAccounts';
import AdminDonorAccounts from './components/Admin/DonorAccounts';
import AdminChangePassword from './components/Admin/ChangePassword';
import BloodDonationsPage from './components/Donor/BloodDonationsPage';
import DonorDonatePage from './components/Donor/DonorDonatePage';
import ClothesPage from './components/Donor/ClothesPage';
import FoodPage from './components/Donor/FoodPage';
import ToysPage from './components/Donor/ToysPage';
import SchoolSuppliesPage from './components/Donor/SchoolSuppliesPage';
import MedicalSuppliesPage from './components/Donor/MedicalSuppliesPage';
import InfoPage from './components/Donor/InfoPage';
import ViewOrgDonor from './components/Donor/ViewOrgDonor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/OrgMain2" element={<OrgMain2 />} />
        <Route path="/OrgProfile" element={<OrgProfile />} />
        {/* organization routes */}

        <Route path="/RegisterD" element={<RegisterD />} />
        <Route path="/RegisterO" element={<Form />} />
        <Route path="/OrgViewDon" element={<OrgViewDon />} />
        <Route path="/OrgReqDon" element={<OrgReqDon />} />
        <Route path="/OrgReqServ" element={<OrgReqServ />} />
        <Route path="/OrgView2" element={<OrgView2 />} />
        <Route path="/OrgView3" element={<OrgView3 />} />
        <Route path="/OrgView1" element={<OrgView1 />} />
        <Route path="/OrgView4" element={<OrgView4 />} />
        <Route path="/DonorProfile" element={<DonorProfile />} />
        <Route path="/OrgViewServ" element={<OrgViewServ />} />
        <Route path="/OrgUpd1" element={<OrgUpd1 />} />
        <Route path="/OrgUpd11" element={<OrgUpd11 />} />
        <Route path="/OrgUpd2" element={<OrgUpd2 />} />
        <Route path="/OrgUpd22" element={<OrgUpd22 />} />
        <Route path="/OrgDel1" element={<OrgDel1 />} />
        <Route path="/OrgDel2" element={<OrgDel2 />} />
        <Route path="/OrgDel3" element={<OrgDel3 />} />
        <Route path="/OrgDel4" element={<OrgDel4 />} />
        {/* admin routes */}

        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Admin/ViewSubmission" element={<ViewSubmission />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Admin/OrgRequests" element={<AdminOrgRequests />} />
        <Route path="/Admin/DeletedOrgRequest" element={<AdminDeletedOrgRequest />} />
        <Route path="/Admin/VolunteerRequests" element={<AdminVolRequests />} />
        <Route path='/Admin/DeletedVolRequest' element={<AdminDeletedVolRequests />} />
        <Route path="/Admin/OrgAccounts" element={<AdminOrgAccounts />} />
        <Route path="/Admin/VolunteerAccounts" element={<AdminVolAccounts />} />
        <Route path="/Admin/DonorAccounts" element={<AdminDonorAccounts />} />
        <Route path="/Admin/ChangePassword" element={<AdminChangePassword />} />
        {/* donor routes  */}

        <Route path="/DonorProfile" element={<DonorProfile />} />
        <Route path="/" element={<DonorDonatePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BloodDonationsPage" element={<BloodDonationsPage />} />
        <Route path="/DonorDonatePage" element={<DonorDonatePage />} />
        <Route path="/ClothesPage" element={<ClothesPage />} />
        <Route path="/FoodPage" element={<FoodPage />} />
        <Route path="/ToysPage" element={<ToysPage />} />
        <Route path="/MedicalSuppliesPage" element={<MedicalSuppliesPage />} />
        <Route path="/SchoolSuppliesPage" element={<SchoolSuppliesPage />} />
        <Route path="/InfoPage" element={<InfoPage />} />
        <Route path="/ViewOrgDonor" element={<ViewOrgDonor />} />







      </Routes>
    </Router>
  );
}

export default App;