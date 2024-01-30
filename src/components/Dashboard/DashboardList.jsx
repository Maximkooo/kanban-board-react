import React from 'react'
import DashboardListItem from './DashboardListItem'

const DashboardList = ({ status, tasks }) => {
  return (
    <div className='list__container'>
      <h5 className=' mb-5'>{status} <span>{tasks.length}</span></h5>
      <div className='list__container__items'>
        {tasks.map(task => (
          <DashboardListItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}


export default DashboardList