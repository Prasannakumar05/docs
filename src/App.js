import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Blog from './components/Blog/Blog'
import Docs from './components/Docs/Docs'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/docs" element={<Docs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
