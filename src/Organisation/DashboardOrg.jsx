import React from 'react'
import NavOrg from './NavOrg'
import OrgHome from './OrgHome'
import { Route, Routes } from 'react-router-dom'
import OrgEditProfile from './OrgEditProfile'
import OrgCreateEvent from './OrgCreateEvent'
import OrgAddFeedback from './OrgAddFeedback'
import OrgViewEvents from './OrgViewEvents'
import OrgViewRegClubs from './OrgViewRegClubs'

function DashboardOrg() {
    return (
        <>
            <NavOrg />
            {/* <OrgHome /> */}
            {/* <OrgEditProfile/> */}
            {/* <OrgCreateEvent/> */}
            {/* <OrgAddFeedback/> */}
            {/* <OrgViewEvents/> */}
            {/* <OrgViewRegClubs/> */}
            <Routes>
                <Route path="/orghome" element={<OrgHome />} />
                <Route path="/orgeditprofile" element={<OrgEditProfile/>} />
                <Route path="/orgcreateevent" element={<OrgCreateEvent/>} />
                <Route path="/orgviewevents" element={<OrgViewEvents/>} />
                <Route path="/orgaddfeedback" element={<OrgAddFeedback/>} />
                <Route path="/orgviewregclubs" element={<OrgViewRegClubs/>} />

            </Routes>
        </>
    )
}

export default DashboardOrg
