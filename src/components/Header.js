import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 50px;
  margin-bottom: 80px;
  background-color: lightblue;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 10%;
`;

const NavHeader = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: yellow;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
`;

const Header = () => {
  return (
    <Nav>
      <NavHeader>Fruit Emporium</NavHeader>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Navbar>
    </Nav>
  );
};

export default Header;