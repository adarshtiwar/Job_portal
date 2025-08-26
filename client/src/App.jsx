// App.js
import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import Home from './pages/home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { AppContext } from './context/AppContext'
import Recruterlogin from './components/Recruterlogin'
import Dashbord from './pages/Dashbord'
import Managejob from './pages/Managejob'
import Viewapplication from './pages/Viewapplication'
import Addjob from './pages/Addjob'
import 'quill/dist/quill.snow.css';

const App = () => {
  const { showReacruter } = useContext(AppContext)
  const location = useLocation()
  return (
    <div>
      {showReacruter && <Recruterlogin />}
     
      {!location.pathname.startsWith('/dashbord') && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />

        <Route path="/dashbord" element={<Dashbord />}>
          <Route path="add-job" element={<Addjob />} />
          <Route path="manage-job" element={<Managejob />} />
          <Route path="view-application" element={<Viewapplication />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
