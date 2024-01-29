// eslint-disable-next-line no-unused-vars
import React from "react";
import SidebarMenu from "./components/SidebarMenuComp/SidebarMenu";
import writing_pad_icon from "../../assets/writing_pad_icon.svg";

const Sidebar = () => {
	return (
		<div>
			<SidebarMenu icon={writing_pad_icon} title="Board" />
			<SidebarMenu icon={writing_pad_icon} title="Board" />
			<SidebarMenu icon={writing_pad_icon} title="Board" />
			<SidebarMenu icon={writing_pad_icon} title="Board" />
			<SidebarMenu icon={writing_pad_icon} title="Board" />
		</div>
	);
};
export default Sidebar;
