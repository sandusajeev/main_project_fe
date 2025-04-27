
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import RegisterOrg from './pages/RegisterOrg'
import RegisterClub from './pages/RegisterClub'
import DashboardOrg from './Organisation/DashboardOrg'
import DashboardClub from './Club/DashboardClub'
import DashboardAdmin from './Admin/DashboardAdmin'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'



function App() {


  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registerorg" element={<RegisterOrg/>}/>
      <Route path="/registerclub" element={<RegisterClub/>}/>



      <Route path="/dashboardadmin/*" element={ <DashboardAdmin/>}/>
      <Route path="/dashboardorg/*" element={<DashboardOrg />} />
      <Route path="/dashboardclub/*" element={ <DashboardClub/>}/>
      <Route path="/aboutus" element={ <AboutUs/>}/>
      <Route path="/contactus" element={ <ContactUs/>}/>
     </Routes>      
      <Footer />
    </>
  )
}

export default App
