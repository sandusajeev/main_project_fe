import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import NavOrg from './NavOrg';
import OrgHome from './OrgHome';
import OrgEditProfile from './OrgEditProfile';
import OrgCreateEvent from './OrgCreateEvent';
import OrgAddFeedback from './OrgAddFeedback';
import OrgViewEvents from './OrgViewEvents';
import OrgViewRegClubs from './OrgViewRegClubs';
import OrgUpdateEvents from './OrgUpdateEvents';

function DashboardOrg() {
  return (
    <>
      <NavOrg />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboardorg/orghome" />} />
        
        <Route path="/orghome" element={<OrgHome />} />
        <Route path="/orgeditprofile" element={<OrgEditProfile />} />
        <Route path="/orgcreateevent" element={<OrgCreateEvent />} />
        <Route path="/orgviewevents" element={<OrgViewEvents />} />
        <Route path="/orgaddfeedback" element={<OrgAddFeedback />} />
        <Route path="/orgviewregclubs" element={<OrgViewRegClubs />} />
        <Route path="/orgupdateevents" element={<OrgUpdateEvents />} />
      </Routes>
    </>
  );
}

export default DashboardOrg;

