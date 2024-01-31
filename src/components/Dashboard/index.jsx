import './Dashboard.scss'
import React from 'react'
import Sidebar from '../Sidebar'
import Kanban from '../Kanban'

const Dashboard = () => {
  return (
    <div className='dashboard__container'>
      <Sidebar />
      <div className='dashboard__template'>
        <div className='pb-5'>FILTER</div>
        <div className='dashboard__statuses'>
          <Kanban />
        </div>
      </div>
    </div>
  )
}

export default Dashboard