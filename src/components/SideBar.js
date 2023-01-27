import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  height: 80vh;
  position: fixed;
  left: 10px;
  top: 100px;
  background-color: #333;
  box-shadow: 5px 5px 8px #222, -5px -5px 8px #444;
  transition: all 0.3s ease;
  z-index: 1;
  overflow: auto;
  padding: 20px;
  border-radius: 15px 15px 15px 15px;
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 1rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background-color: #444;
  }
`;

const SidebarText = styled.h1`
  font-weight: bold;
  color: #f5f5f5;
  font-size: 1.5rem;
  margin: 0 0 20px 0;
  padding: 10px 0;
  border-bottom: 1px solid white;
`;

const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarText>My Projects</SidebarText>
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
