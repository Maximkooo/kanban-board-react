import React from 'react';
import './Sidebar.scss';
const SidebarMenu = ({ icon, title }) => {
	return (
		<div className=" sidebar__menu">
			<div className="  sidebar__logo">
				<img src={icon} alt="" />
			</div>
			<div className=" sidebar__title">
				<p>{title}</p>
			</div>
		</div>
	);
};

export default SidebarMenu;
