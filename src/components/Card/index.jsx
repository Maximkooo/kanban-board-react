import { useEffect, useState } from 'react'
import './Card.scss'
import lowPriority from '../../assets/low-priority.svg'
import mediumPriority from '../../assets/medium-priority.svg'
import highPriority from '../../assets/high-priority.svg'
import { Link } from 'react-router-dom'

const Card = ({ task, deleteTaskHandler }) => {
  const [priorityIcon, setPriorityIcon] = useState(lowPriority)
  const [isEndDateActual, setIsEndDateActual] = useState(false)

  const priorityKeys = {
    Low: lowPriority,
    Medium: mediumPriority,
    High: highPriority,
  }

  useEffect(() => {
    setPriorityIcon(priorityKeys[task.priority])
    if (isEndDateActualHandler(task.dueDate)) {
      setIsEndDateActual(true)
    }
  }, [])

  const isEndDateActualHandler = (dueDate) => {
    return dueDate ? new Date(dueDate) - new Date() > 0 : false
  }

  return (
    <div className='relative'>
      <button
        onClick={() => deleteTaskHandler(task.id)}
        className='absolute right-5 top-5 text-red-600'>
        X
      </button>
      <Link to={`/update-task/${task.title}`} className=''>
        <div className='card '>
          <h5 className='grid-cols-12 mb-2 font-bold'>{task.title}</h5>
          <p className='grid-cols-12'>{task.description}</p>
          <h6 className='font-light italic'>Assignee to: <span className=' font-semibold'>{task.assignee}</span></h6>
          <img src={priorityIcon} alt="low priority" className=" inline-block" width='30' />
          <h6 className={`inline-block mt-2 ml-5 ${isEndDateActual ? 'text-lime-500' : 'text-red-500'}`}>{task.dueDate}</h6>
        </div>
      </Link>
    </div>
  )
}

export default Card