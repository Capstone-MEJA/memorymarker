import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { logoutUser } from "../../store/authSlice";
import { setSelectedPost, toggleSideBar } from "../../store/globalSlice";
import { device } from "../../styles/global";
import SearchBar from "./SearchBar";

/**
 * Component for the main sidebar/navbar
 * @returns A sidebar/navbar for a user to navigate through the site that conditionally renders links based on whether the user is a guest or logged in
 */

const Sidebar: React.FC = () => {
  // setting base variables
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);
  const global = useSelector((state: RootState) => state.global);

  // helper function
  const handleNav = () => {
    dispatch(toggleSideBar());
    dispatch(setSelectedPost(null));
  };

  return (
    <>
      <Navbar>
        <MenuIconOpen
          to="#"
          onClick={() => {
            handleNav();
          }}
        >
          <FaIcons.FaBars />
        </MenuIconOpen>
      </Navbar>

      <SidebarMenu sidebar={global.sideBar}>
        <MenuIconClose
          to="#"
          onClick={() => {
            handleNav();
          }}
        >
          <FaIcons.FaTimes />
        </MenuIconClose>
        <SidebarWrap>
          <ImageWrapper src="logo.png" />

          {auth._id ? (
            <MenuItemLinks>
              <MenuItemLink
                onClick={() => {
                  handleNav();
                }}
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/"
              >
                HOME
              </MenuItemLink>
              <MenuItemLink
                onClick={() => {
                  handleNav();
                }}
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/account"
              >
                HI, {auth.username}!
              </MenuItemLink>
              <MenuItemLink
                onClick={() => {
                  handleNav();
                }}
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/about"
              >
                ABOUT
              </MenuItemLink>

              <MenuItemLink
                onClick={() => {
                  handleNav();
                }}
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/team"
              >
                MEET THE MAKERS
              </MenuItemLink>
              <LogoutButton
                style={{ textDecoration: "none", color: "whitesmoke" }}
                onClick={() => {
                  dispatch(logoutUser(null));
                  dispatch(toggleSideBar());
                  dispatch(setSelectedPost(null));
                  navigate("/");
                }}
              >
                LOG OUT
              </LogoutButton>
            </MenuItemLinks>
          ) : (
            <MenuItemLinks>
              <MenuItemLink
                onClick={() => {
                  handleNav();
                }}
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/"
              >
                HOME
              </MenuItemLink>
              <MenuItemLink
                onClick={() => {
                  handleNav();
                }}
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/Login"
              >
                LOGIN
              </MenuItemLink>
              <MenuItemLink
                onClick={() => {
                  handleNav();
                }}
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/register"
              >
                SIGN-UP
              </MenuItemLink>
              <MenuItemLink
                onClick={() => {
                  handleNav();
                }}
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/about"
              >
                ABOUT
              </MenuItemLink>
              <MenuItemLink
                onClick={() => {
                  handleNav();
                }}
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/team"
              >
                MEET THE MAKERS
              </MenuItemLink>
            </MenuItemLinks>
          )}
            <SearchBar/>
        </SidebarWrap>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;

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
  height: 100%;
  background-color: #739cf0;
  position: fixed;
  justify-content: center
  top: 0px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 0.6s;
  z-index: 1;
  // padding-top: 10px;

  @media ${device.mobileS} {
    max-width: 800px;
    width: 100%;
  }
  
  @media ${device.tablet} {
    max-width: 1100px;
    width: 30%;
  }
  
  @media ${device.laptopL} {
    max-width: 1440px;
    width: 20%;
  }
`;

const LogoutButton = styled.div`
  margin: 0 2rem;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  padding: 1em;
  font: monsterrat;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #f2cbac;
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
  justify-content: center;

  @media ${device.mobileS} {
    max-width: 800px;
    width: 100%;
  }

  @media ${device.laptopL} {
    max-width: 1440px;
    width: 90%;
  }
`;

const MenuItemLink = styled(Link)`
  margin: 0 2rem;
  border-radius: 5px;
  text-align: center;
  textDecoration: "none"
  color: "whitesmoke";
  width: 100%;
  padding: 1em;
  font: monsterrat;
  display: flex;
  justify-content: center;
  // min-width: 100px;

  &:hover {
    background-color: #F2CBAC;
    color: #000080;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    text-decoration: none;
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: #739cf0;
  z-index: 1;
  position: absolute;
  border: 2px solid #739cf0;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;

  @media ${device.mobileS} {
    max-width: 800px;
    height: 3rem;
    width: 3rem;
  }

  @media ${device.laptopL} {
    max-width: 1440px;
    height: 5rem;
    width: 5rem;
  }
`;

const ImageWrapper = styled.img`
  height: 7rem;
  width: 7rem;
`;

const SidebarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;
