import React from 'react'
import NavClub from './NavClub'
import ClubEditProfile from './ClubEditProfile'
import ClubHome from './ClubHome'
import ClubViewEvents from './ClubViewEvents'
import ClubRegisterEvents from './ClubRegisterEvents'
import ClubViewRegEvents from './ClubViewRegEvents'
import ClubAddFeedback from './ClubAddFeedback'
import { Navigate, Route, Routes } from 'react-router-dom'

function DashboardClub() {
  return (
    <>
    <NavClub/>
    {/* <ClubEditProfile/> */}
    {/* <ClubHome/> */}
    {/* <ClubViewEvents/> */}
    {/* <ClubRegisterEvents/> */}
    {/* <ClubViewRegEvents/> */}
    {/* <ClubAddFeedback/> */}

    <Routes>
        <Route path="/" element={<Navigate to="/dashboardclub/clubhome" />} />
        
        <Route path="/clubhome" element={<ClubHome/>} />
        <Route path="/clubeditprofile" element={<ClubEditProfile/>} />
        <Route path="/clubviewevents" element={<ClubViewEvents/>} />
        <Route path="/clubregisterevents" element={<ClubRegisterEvents/>} />
        <Route path="/clubviewregevents" element={<ClubViewRegEvents/>} />
        <Route path="/clubaddfeedback" element={<ClubAddFeedback/> } />
      </Routes>
    </>
  )
}

export default DashboardClub
