
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Admin from './pages/Admin'
import Clubs from './pages/Clubs'
import Home from './pages/Home'
import Organisation from './pages/Organisation'
import Login from './pages/Login'
import RegisterOrg from './pages/RegisterOrg'
import RegisterClub from './pages/RegisterClub'
import DashboardOrg from './Organisation/DashboardOrg'

function App() {


  return (
    <>
      <Header />
      <DashboardOrg/>
      {/* <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registerorg" element={<RegisterOrg/>}/>
      <Route path="/registerclub" element={<RegisterClub/>}/>



      <Route path="/auth" element={ <Admin />}/>
      <Route path="/dashboard" element={<Organisation />}/>
      <Route path="/project" element={ <Clubs />}/>
     </Routes>       */}
      <Footer />
    </>
  )
}

export default App
