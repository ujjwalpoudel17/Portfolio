import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Project from './Components/Project/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home/ >} />
          <Route path="/About" element={<About />} />
           <Route path="/Services" element={<Services />} />
             <Route path="/Contact" element={<Contact />} />
              <Route path="/Project" element={<Project />} />
        </Route>
        </Routes>
      </Router>
  
  )
}

export default App
