import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  height: 80vh;
  position: fixed;
  left: 10px;
  top: 100px;
  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #3b4451,
    6.22302px 6.22302px 18.6691px #000000;
  border-radius: 24.8921px;

  transition: all 0.3s ease;
  z-index: 1;
  overflow: auto;
  padding: 20px;
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 1rem;
  color: rgba(255, 255, 255, 1);

  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;

  letter-spacing: 0.025em;
  margin: 10px;

  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #3b4451,
    6.22302px 6.22302px 18.6691px #000000;
  border-radius: 12.446px;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background: #2c2f33;
    box-shadow: inset -6.22302px -6.22302px 6.22302px #3b4451,
      inset 3.73381px 3.73381px 6.22302px #000000;
    border-radius: 12.446px;
    color: rgba(26, 145, 250, 1);
  }
`;

const SidebarText = styled.h1`
  font-weight: bold;

  font-style: normal;
  font-weight: 300;
  font-size: 23px;
  line-height: 40px;

  letter-spacing: 0.025em;
  text-transform: uppercase;

  color: rgba(26, 145, 250, 1);
`;

const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarText>My Projects</SidebarText>
      <br />
      <SidebarLink to="/team-projects">
        <i className="fa fa-users" aria-hidden="true"></i>Team Projects
      </SidebarLink>
      <SidebarLink to="/draft">
        <i className="fa fa-edit" aria-hidden="true"></i>Draft
      </SidebarLink>
      <SidebarLink to="/favourites">
        <i className="fa fa-heart" aria-hidden="true"></i>Favourites
      </SidebarLink>
      <SidebarLink to="/asset-library">
        <i className="fa fa-folder" aria-hidden="true"></i>Asset Library
      </SidebarLink>
    </SidebarContainer>
  );
};

export default SideBar;
