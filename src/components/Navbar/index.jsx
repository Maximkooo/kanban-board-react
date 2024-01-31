import React from 'react';
import './Navbar.scss';
import logo from '../../assets/ironSpace-logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/">
				<img src={logo} className="" alt="IronSpace" />
			</Link>
			<h6 className="font-bold text-3xl">Kanban Board</h6>
		</div>
	);
};
export default Navbar;
