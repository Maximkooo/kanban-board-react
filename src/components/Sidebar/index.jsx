// eslint-disable-next-line no-unused-vars
import './Sidebarmenu.scss';
import React from 'react';
import writing_pad_icon from '../../assets/writing_pad_icon.svg';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
	return (
		<div className="sidebar__container">
			<SidebarMenu icon={writing_pad_icon} title="Board" />
			<SidebarMenu icon={writing_pad_icon} title="Board" />
			<SidebarMenu icon={writing_pad_icon} title="Board" />
			<SidebarMenu icon={writing_pad_icon} title="Board" />
			<SidebarMenu icon={writing_pad_icon} title="Board" />
		</div>
	);
};
export default Sidebar;
