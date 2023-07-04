import React from 'react'
import Hero from '../../components/Hero'
import Sidebar from '../../components/sidebar/Sidebar'

const HomeScreen = () => {
  return (

    <div className='HomeScreen'>
        <Sidebar/>
        <div className='homeContainer'>container</div>
    <Hero/>
    </div>
  )
}

export default HomeScreen