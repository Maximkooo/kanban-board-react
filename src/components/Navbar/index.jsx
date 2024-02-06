import React from 'react';
import './Navbar.scss';
import logo from '../../assets/ironSpace-logo.svg';
import reactLogo from '../../assets/react.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/dashboard">
				<img src={logo} className="inline-block mt-2" alt="IronSpace" />
				<img src={reactLogo} className="inline-block ml-1" alt="React" />
			</Link>
			<h6 className="font-bold text-3xl">Kanban Board</h6>
		</div>
	);
};
export default Navbar;
