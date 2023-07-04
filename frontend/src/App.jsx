import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navbar/Navbar'
const App = () => {
  return (
    <>
    <ToastContainer />
      <Outlet/>
    </>
  )
}

export default App