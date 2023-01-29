import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiHome, FiBell, FiUser, FiSearch } from "react-icons/fi";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
  background: #eaf3f4;
  box-shadow: 4px 4px 10px rgba(0, 118, 135, 0.05),
    6px 6px 40px rgba(0, 118, 135, 0.1);
  border-radius: 20px 12px 12px 20px;
  transition: all 0.3s ease;

  left: 10px;
  width: auto;
  margin-left: 10px;
  margin-right: 10px;
`;

const NavbarBrand = styled.h1`
  margin: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 40px;

  letter-spacing: 0.025em;
  text-transform: uppercase;

  color: #007c84;
`;

const NavbarLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavbarLink = styled.li`
  margin: 0 16px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(0, 124, 132, 1);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3),
    -2px -2px 10px rgba(255, 255, 255, 0.3);
  &:hover {
    transform: scale(1.2);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 98px;
  right: 10px;
  background: linear-gradient(
      95.73deg,
      rgba(0, 118, 135, 0.08) 0.9%,
      rgba(0, 118, 135, 0.06) 52.54%,
      rgba(0, 118, 135, 0.02) 99.06%
    ),
    rgba(235, 240, 241, 0.3);
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: rgba(0, 124, 132, 1);
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 0.5rem;
  color: rgba(0, 124, 132, 1);
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background: #007c84;
    color: #fff;
    /* Shadow 01 */

    box-shadow: 0px 15px 80px rgba(0, 124, 132, 0.13),
      0px 5.47525px 40.9132px rgba(0, 124, 132, 0.0896976),
      0px 2.65813px 30.1634px rgba(0, 124, 132, 0.0723178),
      0px 1.30307px 21.8208px rgba(0, 124, 132, 0.0576822),
      0px 0.515234px 12.1225px rgba(0, 124, 132, 0.0403024);
    border-radius: 12px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  width: 400px;
  margin-left: -500px;
  color: rgba(0, 124, 132, 1);
  padding: 0.5rem 1rem;
  background: linear-gradient(
      95.73deg,
      rgba(0, 118, 135, 0.08) 0.9%,
      rgba(0, 118, 135, 0.06) 52.54%,
      rgba(0, 118, 135, 0.02) 99.06%
    ),
    rgba(235, 240, 241, 0.3);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  &:focus {
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.25),
      inset -2px -2px 8px rgba(0, 0, 0, 0.25);
    outline: none;
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  color: rgba(0, 124, 132, 1);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    color: #bbb;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarBrand>My Workspace</NavbarBrand>
      <SearchContainer>
        <SearchForm>
          <SearchInput type="text" placeholder="Type to search" />
          <SearchButton type="submit">
            <FiSearch size={20} />
          </SearchButton>
        </SearchForm>
      </SearchContainer>
      <NavbarLinks>
        <NavbarLink>
          <FiHome size={24} />
        </NavbarLink>
        <NavbarLink>
          <FiBell size={24} />
        </NavbarLink>
        <NavbarLink onClick={() => setIsOpen(!isOpen)}>
          <FiUser size={24} />
        </NavbarLink>
      </NavbarLinks>
      <DropdownMenu isOpen={isOpen}>
        <DropdownLink>My Profile</DropdownLink>
        <DropdownLink>Settings</DropdownLink>
        <DropdownLink>Status</DropdownLink>
        <DropdownLink to="/">Logout</DropdownLink>
      </DropdownMenu>
    </NavbarContainer>
  );
};

export default Navbar;
