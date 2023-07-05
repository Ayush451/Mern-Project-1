import React from 'react'
import Hero from '../../components/Hero'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
const HomeScreen = () => {
  return (

    <div className='HomeScreen'>
        <Sidebar/>
        <div className='homeContainer'>
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          
        </div>
    <Hero/>
    </div>
  )
}

export default HomeScreen