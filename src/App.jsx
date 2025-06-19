import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Footer from './components/Footer'
import SignUp from './pages/SignUp'
import Reservations from './pages/Reservations'


function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/signUp' element={< SignUp/>} />
        <Route path='/reservations' element={< Reservations/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
