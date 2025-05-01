import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import Home from './pages/home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/apply-job/:id" element={<ApplyJob/>} />
    <Route path="/applications" element={<Applications/>} />

</Routes>
<Footer/>
    </div>
  ) 
}

export default App