import React from 'react'
import './Navbar.scss'
import logo from '../../assets/ironSpace-logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='#'>
        <img src={logo} className="" alt="IronSpace" />
      </a>
      <h6 className='font-bold text-3xl'>Kanban Board</h6>
    </div>

  )
}
export default Navbar