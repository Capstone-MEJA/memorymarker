import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
// import Nav from "../app/Navbar";
// import { SidebarData } from "./SideBarData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { logoutUser } from "../../store/authSlice";

const Sidebar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
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

          {auth._id ? (
            <MenuItemLinks>
              <MenuItemLink
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/"
              >
                Home
              </MenuItemLink>
              <MenuItemLink
                to="/account"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                {auth.username}
              </MenuItemLink>
              <MenuItemLink
                to="/about"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                About
              </MenuItemLink>
              <LogoutButton
                style={{ textDecoration: "none", color: "whitesmoke" }}
                onClick={() => {
                  dispatch(logoutUser(null));
                }}
              >
                Logout
              </LogoutButton>
            </MenuItemLinks>
          ) : (
            <MenuItemLinks>
              <MenuItemLink
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/"
              >
                Home
              </MenuItemLink>
              <MenuItemLink
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/Login"
              >
                Login
              </MenuItemLink>
              <MenuItemLink
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/register"
              >
                Sign-up
              </MenuItemLink>
              <MenuItemLink
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/about"
              >
                About
              </MenuItemLink>
            </MenuItemLinks>
          )}

          {/* // if the user is logged in show */}
          {/* {SidebarData.map((item, index) => {
            return (
              <MenuItems key={index}>
                <MenuItemLinks to={item.path}>
                  {item.icon}
                  <span style={{ marginLeft: "16px" }}>{item.title}</span>
                </MenuItemLinks>
              </MenuItems>
            );
          })} */}
        </SidebarWrap>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  height: 5rem;
  background-color: black;
  z-index: 1;
  position: absolute;
  border: 1px;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  font-size: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  color: #ffffff;
  border: 1px;
`;

const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;
`;

const SidebarMenu = styled.div<{ sidebar: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 0.6s;
  z-index: 1;
  // padding-top: 10px;
`;

const SidebarWrap = styled.div``;
const LogoutButton = styled.div`
  margin: 0 2rem;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  // border: 1px solid blue;
  padding: 1em;

  &:hover {
    background-color: #ff0000;
    color: #000080;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    text-decoration: none;
  }
`;

const MenuItemLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  margin: 10px;
  // border: 1px solid green;
`;

const MenuItemLink = styled(Link)`
  margin: 0 2rem;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  // border: 1px solid blue;
  padding: 1em;

  &:hover {
    background-color: #ff0000;
    color: #000080;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    text-decoration: none;
  }
`;
