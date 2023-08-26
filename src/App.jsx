import { useState } from 'react'
import TheApps from './TheApps'
import Home from './Home'
import Games from './Games'
import Experience from './Experience'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


import './App.css'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <div>
        <div className = 'navBar'>
          <ul>
      <li><Link  to="/">Home</Link></li>
      <li><Link  to="/TheApps">Apps</Link></li>
      <li><Link  to="/Games">Games</Link></li>
      <li><Link  to="/Experience">Career</Link></li>
      </ul>
      </div>
      
      
        
      </div>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/theapps" element={<TheApps />} />
    <Route path="/games" element={<Games />} />
    <Route path="/experience" element={<Experience />} />
    </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App







