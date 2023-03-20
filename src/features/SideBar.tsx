import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import Nav from '../app/Navbar';
import { SidebarData } from './SideBarData';

const Sidebar: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <Navbar>
                <MenuIconOpen to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
            </Navbar>

            <SidebarMenu sidebar={sidebar}>
                <SidebarWrap>

                <MenuIconClose to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                </MenuIconClose>

                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{marginLeft: '16px'}}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
                </SidebarWrap>
            </SidebarMenu>
        </>
    )
}

export default Sidebar


const Navbar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: black;
`

const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
    color: #ffffff;
`

const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #ffffff;
`

const SidebarMenu = styled.div<{ sidebar: boolean}>`
    width: 250px;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => sidebar ? '0' : '-100%'};
    transition: .6s;
    z-index: 1;
`

const SidebarWrap = styled.div``;

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #ffffff;
        color: #000080;
        width: 100%;
        height: 45px;
        text-align: center;
        border-radius: 5px;
        margin: 0 2rem;
    }
`

