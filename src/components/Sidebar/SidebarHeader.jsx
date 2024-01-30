import React from 'react';
import reactIcon from '../../assets/react.svg';
import './Sidebar.scss';
const SidebarHeader = () => {
	return (
		<div className="sidebar__header">
			<div className="sidebar__header__logo">
				<img src={reactIcon} alt="" />
			</div>
			<div className="sidebar__header__title">
				<h1>Team in Space</h1>
				<p>Software project</p>
			</div>
		</div>
	);
};

export default SidebarHeader;
