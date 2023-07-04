import React from 'react'
import Hero from '../../components/Hero'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const HomeScreen = () => {
  return (

    <div className='HomeScreen'>
        <Sidebar/>
        <div className='homeContainer'>
          <Navbar/>
          container
        </div>
    <Hero/>
    </div>
  )
}

export default HomeScreen