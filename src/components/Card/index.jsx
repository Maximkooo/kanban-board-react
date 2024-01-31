import { useEffect, useState } from 'react'
import './Card.scss'
import lowPriority from '../../assets/low-priority.png'
import mediumPriority from '../../assets/medium-priority.png'
import highPriority from '../../assets/high-priority.png'
import { Link } from 'react-router-dom'

const Card = ({ task }) => {
  const [priorityIcon, setPriorityIcon] = useState(lowPriority)
  const [isEndDateActual, setIsEndDateActual] = useState(false)

  const priorityKeys = {
    Low: lowPriority,
    Medium: mediumPriority,
    High: highPriority,
  }

  useEffect(() => {
    priorityIconHandler(task.priority)
    if (isEndDateActualHandler(task.dueDate)) {
      setIsEndDateActual(true)
    }
  }, [])

  const priorityIconHandler = (priority) => {
    if (priority) {
      setPriorityIcon(priorityKeys[priority])
    }
  }

  const isEndDateActualHandler = (dueDate) => {
    return dueDate ? new Date(dueDate) - new Date() > 0 : false
  }



  return (
    <Link to={`/update-task/${task.id}`}>
      <div className='card'>
        <h5 className='grid-cols-12 mb-2 font-bold'>{task.title}</h5>
        <p className='grid-cols-12'>{task.description}</p>
        <h6 className='font-light italic'>Assignee to: <span className=' font-semibold'>{task.assignee}</span></h6>
        <img src={priorityIcon} alt="low priority" className=" inline-block" width='30' />
        <h6 className='inline-block ml-5 text-red-500'>{task.dueDate}</h6>
      </div>
    </Link>
  )
}

export default Card