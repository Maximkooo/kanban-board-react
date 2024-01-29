// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Sidebarmenu.scss";
// eslint-disable-next-line react/prop-types
const SidebarMenu = ({ icon, title }) => {
	return (
		<div className="sidebar__menu">
			<div className="sidebar__logo">
				<img src={icon} alt="" />
			</div>
			<div className="sidebar__title">
				<p>{title}</p>
			</div>
		</div>
	);
};

export default SidebarMenu;
