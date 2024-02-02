import './Dashboard.scss'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import Kanban from '../Kanban'
import FilterCards from '../FilterCards'
import mockData from '../../mockData'

const Dashboard = () => {
  const [data, setData] = useState(JSON.parse(JSON.stringify(mockData)))
  const [filteredPriorityData, setFilteredPriorityData] = useState(null)
  const [filteredStringData, setFilteredStringData] = useState('')


  const filterHandler = (e) => {
    setFilteredStringData(e.target.value)
  };

  const filterPriorityHandler = (priorities) => {
    setFilteredPriorityData(priorities || null);
  };

  useEffect(() => {
    const filterPriority = filteredPriorityData ? filteredPriorityData.map(el => el.value) : null;
    const filteredData = data.map(type => ({
      ...type,
      tasks: type.tasks.map(task => ({
        ...task,
        visible: (!filterPriority || filterPriority.includes(task.priority)) && task.title.toLowerCase().includes(filteredStringData)
      }))
    }));
    setData(filteredData);
  }, [filteredPriorityData, filteredStringData])


  const onDragEnd = result => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
      const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

      const sourceCol = data[sourceColIndex]
      const destinationCol = data[destinationColIndex]

      const sourceTask = [...sourceCol.tasks]
      const destinationTask = [...destinationCol.tasks]

      const [removed] = sourceTask.splice(source.index, 1)
      destinationTask.splice(destination.index, 0, removed)

      data[sourceColIndex].tasks = sourceTask
      data[destinationColIndex].tasks = destinationTask

      setData(data)
    }
  }

  return (
    <div className='dashboard__container'>
      <Sidebar />
      <div className='dashboard__template'>
        <div className='pb-5'>
          <FilterCards filterHandler={filterHandler} priorityData={filteredPriorityData} filterPriorityHandler={filterPriorityHandler} />
        </div>
        <div className='dashboard__statuses'>
          <Kanban data={data} onDragEnd={onDragEnd} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard