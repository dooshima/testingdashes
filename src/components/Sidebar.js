import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavLink, 
  Bars,
  NavMenu,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem 
} from  './NavBarElements';

import { TiMessages } from "react-icons/ti";

import { AiOutlineBell } from "react-icons/ai";
import UserAvatar  from 'react-user-avatar';


const options = ["Profile", "Balance", "Inbox","Setting", "Logout"];


const NavIcon = styled(Link)`
  margin-left: 7rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  width: 250px;
  height: 150vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  overflow: scroll;

  left: ${({ sidebar }) => (!sidebar ? '0' : '-100%')};
  transition: 360ms;
  z-index: 20;

 
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <Nav className="Navbar">
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} className="maxicon"/>
            </NavIcon>

            <NavMenu className="Nav">
        <NavLink to="/about"  activeSytle>
        <TiMessages size="20"/>
         </NavLink>
         <NavLink to="/services" activeSytle  >
            <AiOutlineBell size="20"/>
         </NavLink>
      

         <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption ||
          <UserAvatar size="30" name="W" 
          src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg"/>

}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </NavMenu>
        </Nav>


        <SidebarNav sidebar={sidebar} className="sidebar">
          <SidebarWrap>
            <NavIcon to='#'>
              <FaIcons.FaBars onClick={showSidebar} className= "mini" />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

