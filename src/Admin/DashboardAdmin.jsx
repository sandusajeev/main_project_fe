import React from 'react';
import NavAdmin from './NavAdmin';
import AdminHome from './AdminHome'; 
import '../Admin/styleAdmin/DashboardAdmin.css';
import AdminViewOrg from './AdminViewOrg';
import AdminViewClub from './AdminViewClub';
import AdminViewEvents from './AdminViewEvents';
import AdminViewFeedbacks from './AdminViewFeedbacks';
import { Navigate, Route, Routes } from 'react-router-dom';

function DashboardAdmin() {
  return (
    <div className="admin-dashboard-container">
      <div className="admin-nav">
        <NavAdmin />
      </div>

      <div className="admin-home">
        {/* <AdminHome /> */}
        {/* <AdminViewOrg/> */}
        {/* <AdminViewClub/> */}
        {/* <AdminViewEvents/> */}
        {/* <AdminViewFeedbacks/> */}
        <Routes>
        {/* Redirect /dashboardorg to /dashboardorg/orghome */}
        <Route path="/" element={<Navigate to="/dashboardadmin/adminhome" />} />
        
        <Route path="/adminhome" element={<AdminHome /> } />
        <Route path="/adminvieworg" element={<AdminViewOrg/> } />
        <Route path="/adminviewclub" element={<AdminViewClub/>} />
        <Route path="/adminviewevents" element={<AdminViewEvents/>} />
        <Route path="/adminviewfeedbacks" element={<AdminViewFeedbacks/>} />
      </Routes>
      </div>
    </div>
  )
}

export default DashboardAdmin;


