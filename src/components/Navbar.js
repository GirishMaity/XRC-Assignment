import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiHome, FiBell, FiUser, FiSearch } from "react-icons/fi";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #333;
  box-shadow: 5px 5px 8px #222, -5px -5px 8px #444;
  transition: all 0.3s ease;
  border-radius: 15px 15px 15px 15px;
  left: 10px;
  width: auto;
  margin-left: 10px;
  margin-right: 10px;
`;

const NavbarBrand = styled.h1`
  margin: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #f5f5f5;
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
  color: #f5f5f5;
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
  background-color: #333;
  box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.3),
    -2px -2px 10px rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 15px 15px 15px 15px;
  color: #f5f5f5;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 0.5rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background-color: #444;
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
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: none;
  box-shadow: inset 5px 5px 8px #222, inset -5px -5px 8px #444;
  &:focus {
    box-shadow: inset 2px 2px 8px #222, inset -2px -2px 8px #444;
    outline: none;
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #ddd;
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
