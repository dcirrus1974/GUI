import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
//import icons from react icons
import { FaList, FaRegHeart, FaRegFolder,FaUserFriends, FaRegClock, FaShareAlt, FaStar,FaCog, FaTrash, FaUser } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import React, {Component, useState} from 'react';
const MenuBar: React.FC = () => {    
   //create initial menuCollapse state using useState hook
   const [menuCollapse, setMenuCollapse] = useState(false)

   //create a custom function that will change menucollapse state from false to true and true to false
 const menuIconClick = () => {
   //condition checking to change state from true to false and vice versa
   menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
 };
  return (
    <>
    <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
        <div className="logotext">
            {/* small and big change using menucollapse state */}
            <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
            {menuCollapse ? (
              <FiArrowRightCircle/>
            ) : (
              <FiArrowLeftCircle/>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem active={true} icon={<FaRegFolder />}>
              Personal Files<Link to="/personal" />
            </MenuItem>
            <MenuItem icon={<FaUserFriends />}>Data Room<Link to="/room" /></MenuItem>
            <MenuItem icon={<FaRegClock />}>Recent Files<Link to="/recent" /></MenuItem>
            <MenuItem icon={<FaShareAlt />}>Shared Files<Link to="/shared" /></MenuItem>
            <MenuItem icon={<FaStar />}>Favourite<Link to="/favourite" /></MenuItem>
            <MenuItem icon={<FaTrash />}>Trash<Link to="/trash" /></MenuItem>
            <MenuItem icon={<FaUser />}>Admin<Link to="/admin" /></MenuItem>
            <MenuItem icon={<FaCog />}>Settings<Link to="/settings" /></MenuItem>
          </Menu>
        </SidebarContent>        
      </ProSidebar>
    </div>
  </>
  );
}
export default MenuBar;