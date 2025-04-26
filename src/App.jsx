
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Admin from './pages/Admin'
import Clubs from './pages/Clubs'
import Home from './pages/Home'
import Organisation from './pages/Organisation'
import Login from './pages/Login'

function App() {


  return (
    <>
      <Header />
      <Login/>
      {/* <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/auth" element={ <Admin />}/>
      <Route path="/dashboard" element={<Organisation />}/>
      <Route path="/project" element={ <Clubs />}/>
     </Routes>       */}
      <Footer />
    </>
  )
}

export default App
