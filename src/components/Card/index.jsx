import { useEffect, useState } from 'react'
import './Card.scss'
import lowPriority from '../../assets/low-priority.png'
import mediumPriority from '../../assets/medium-priority.png'
import highPriority from '../../assets/high-priority.png'
import { Link } from 'react-router-dom'

const Card = ({ task }) => {
    const [priorityIcon, setPriorityIcon] = useState(lowPriority)
    const priorityKeys = {
        Low: lowPriority,
        Medium: mediumPriority,
        High: highPriority,
    }

    useEffect(() => {
        if (task.priority) {
            setPriorityIcon(priorityKeys[task.priority])
        }

    }, [priorityIcon])

    const test = () => {
        console.log(task);
    }

    return (
        <Link to={`/update-task/${task.id}`}>
            <div className='card' onClick={test}>
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