import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiHome, FiBell, FiUser, FiSearch } from "react-icons/fi";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #3b4451,
    6.22302px 6.22302px 18.6691px #000000;
  border-radius: 24.8921px;
  transition: all 0.3s ease;

  left: 10px;
  width: auto;
  margin-left: 10px;
  margin-right: 10px;
`;

const NavbarBrand = styled.h1`
  margin: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 40px;
  margin-left: 30px;

  letter-spacing: 0.025em;

  color: rgba(255, 255, 255, 1);
`;

const NavbarLinks = styled.ul`
  display: flex;
  position: relative;
  list-style: none;
  left: 67rem;
  width: 2.5rem;
  margin: 0.5rem;
  padding: 0;
  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #3b4451,
    6.22302px 6.22302px 18.6691px #000000;
  border-radius: 12.446px;
  position: relative;
  aspect-ratio: 1/1;
`;

const NavbarLink = styled.li`
  display: flex;
  position: relative;
  margin: 0px 16px;
  align-items: center;
  justify-content: center;
  right: 8px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
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
  width: 8rem;
  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #3b4451,
    6.22302px 6.22302px 18.6691px #000000;
  border-radius: 24.8921px;
  color: rgba(26, 145, 250, 1);
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  transition: all 0.3s ease;
  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #3b4451,
    6.22302px 6.22302px 18.6691px #000000;
  border-radius: 12.446px;
  &:hover {
    color: rgba(26, 145, 250, 1);

    box-shadow: 0px 15px 80px rgba(0, 124, 132, 0.13),
      0px 5.47525px 40.9132px rgba(0, 124, 132, 0.0896976),
      0px 2.65813px 30.1634px rgba(0, 124, 132, 0.0723178),
      0px 1.30307px 21.8208px rgba(0, 124, 132, 0.0576822),
      0px 0.515234px 12.1225px rgba(0, 124, 132, 0.0403024);
    border-radius: 12px;
  }
`;

const SearchContainer = styled.div`
  left: 35rem;
  right: 40rem;
  display: flex;
  align-items: center;
  position: relative;
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
  background: #2c2f33;
  box-shadow: inset -6.22302px -6.22302px 6.22302px #3b4451,
    inset 3.73381px 3.73381px 6.22302px #000000;
  border-radius: 12.446px;
  &:focus {
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.25),
      inset -2px -2px 8px rgba(0, 0, 0, 0.25);
    outline: none;
  }
`;

const SearchButton = styled.button`
  //background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    color: #bbb;
  }
  padding: 0.5rem;
  width: 2.5rem;
  margin: 0.3rem;
  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #3b4451,
    6.22302px 6.22302px 18.6691px #000000;
  border-radius: 12.446px;
  position: relative;
  aspect-ratio: 1/1;
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
            <FiSearch size={24} />
          </SearchButton>
        </SearchForm>
      </SearchContainer>
      <NavbarLinks>
        <NavbarLink>
          <FiHome size={24} />
        </NavbarLink>
      </NavbarLinks>
      <NavbarLinks>
        <NavbarLink>
          <FiBell size={24} />
        </NavbarLink>
      </NavbarLinks>
      <NavbarLinks>
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
