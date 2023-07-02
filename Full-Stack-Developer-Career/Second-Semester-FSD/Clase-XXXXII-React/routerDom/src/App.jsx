//import { useState } from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'


function App() {
  
  return (
    <>
      <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
