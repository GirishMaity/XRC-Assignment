import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  height: 80vh;
  position: fixed;
  left: 10px;
  top: 100px;
  background: #eaf3f4;
  box-shadow: 4px 4px 10px rgba(0, 118, 135, 0.05),
    6px 6px 40px rgba(0, 118, 135, 0.1);
  border-radius: 20px 12px 12px 20px;

  transition: all 0.3s ease;
  z-index: 1;
  overflow: auto;
  padding: 20px;
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 1rem;
  color: rgba(0, 124, 132, 1);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 40px;

  letter-spacing: 0.025em;
  text-transform: uppercase;

  background: linear-gradient(
      95.73deg,
      rgba(0, 118, 135, 0.08) 0.9%,
      rgba(0, 118, 135, 0.06) 52.54%,
      rgba(0, 118, 135, 0.02) 99.06%
    ),
    rgba(235, 240, 241, 0.3);
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

const SidebarText = styled.h1`
  font-weight: bold;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 40px;

  letter-spacing: 0.025em;
  text-transform: uppercase;

  color: #007c84;
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
