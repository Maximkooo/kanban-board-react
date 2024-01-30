import React from 'react'

const DashboardListItem = ({ task }) => {
  return (
    <div className='item__'>
      <h5>{task.title}</h5>
      {/* <p>{task.description}</p> */}
    </div>
  )
}

export default DashboardListItem