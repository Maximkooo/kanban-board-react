import './Dashboard.scss'
import React from 'react'
import Sidebar from '../Sidebar'
import DashboardList from './DashboardList'

import { TASKS, STATUSES } from '../../common/constants'


const Dashboard = () => {
  const filterOfStatusHandler = (status) => {
    return TASKS.filter((task) => task.status === status)
  }
  return (
    <div className='dashboard__container'>
      <Sidebar />
      <div className='dashboard__template'>
        <div className='pb-5'>FILTER</div>
        <div className='dashboard__statuses'>
          {STATUSES.map((status, idx) => (
            <DashboardList key={idx} status={status} tasks={filterOfStatusHandler(status)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard