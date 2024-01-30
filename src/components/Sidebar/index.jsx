// eslint-disable-next-line no-unused-vars
import './Sidebar.scss';
import React from 'react';
import writing_pad_icon from '../../assets/writing_pad_icon.svg';
import SidebarMenu from './SidebarMenu';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
	return (
		<div className="sidebar__container primary-background">
			<SidebarHeader/>
			<SidebarMenu icon={writing_pad_icon} title="Backlog" />
			<SidebarMenu icon={writing_pad_icon} title="Board" />
			<SidebarMenu icon={writing_pad_icon} title="Reports" />
			<SidebarMenu icon={writing_pad_icon} title="Releases" />
			<SidebarMenu icon={writing_pad_icon} title="Components" />
		</div>
	);
};
export default Sidebar;
