import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import styled from "styled-components";
import Cards4 from "./Cards4";

const Container = styled.div`
  background: #2c2f33;

  height: 100vh;
`;

const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <SideBar />
      <Cards4 />
    </Container>
  );
};

export default Dashboard;
