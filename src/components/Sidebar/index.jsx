// eslint-disable-next-line no-unused-vars
import './Sidebar.scss';
import React from 'react';
import writing_pad_icon from '../../assets/writing_pad_icon.svg';
import SidebarMenu from './SidebarMenu';
import SidebarHeader from './SidebarHeader';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className="sidebar__container primary-background">
			<SidebarHeader />
			<Link to="/task-create">
				<SidebarMenu icon={writing_pad_icon} title="Create Task" />
			</Link>
			<Link to="/task-pending">
				<SidebarMenu icon={writing_pad_icon} title="Pending Task" />
			</Link>
			<Link to="/task-inprogress">
				<SidebarMenu icon={writing_pad_icon} title="In Progress " />
			</Link>
			<Link to="/task-done">
				<SidebarMenu icon={writing_pad_icon} title="Done" />
			</Link>
			<Link to="/task-review">
				<SidebarMenu icon={writing_pad_icon} title="In Review" />
			</Link>
			<Link to="/task-overall">
				<SidebarMenu icon={writing_pad_icon} title="All Tasks" />
			</Link>
		</div>
	);
};
export default Sidebar;
