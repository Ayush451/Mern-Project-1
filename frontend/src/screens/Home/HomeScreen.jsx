import React from 'react'
import Hero from '../../components/Hero'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
const HomeScreen = () => {
  return (

    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>
            <Table/>
          </div>
        </div>
    <Hero/>
    </div>
  )
}

export default HomeScreen