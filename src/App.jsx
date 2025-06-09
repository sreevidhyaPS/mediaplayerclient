import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Log from './pages/Log'
import History from './pages/History'
import Reg from './pages/Reg'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';

import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/log' element={<Log/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/his' element={<History/>}/>

    </Routes>
    <Footer/>
    <ToastContainer/>

    </>
  )
}

export default App
