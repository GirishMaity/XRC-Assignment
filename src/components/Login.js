import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: #2d3436;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = styled.input`
  width: 20rem;
  height: 3rem;
  margin: 12px;
  font-family: "Damion", cursive;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  background: #333;
  color: rgb(161, 161, 161);
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5),
    inset -3px -3px 7px rgba(255, 255, 255, 0.05);
  transition: 0.3s;
  &:focus {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.5),
      inset -1px -1px 2px rgba(255, 255, 255, 0.05);
    transition: 0.3s;
  }
`;

const Button = styled.button`
  margin: 12px;
  height: 3rem;
  width: 20rem;
  border-radius: 10px;
  background: linear-gradient(315deg, #494949, #3d3d3d);
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5),
    -3px -3px 7px rgba(255, 255, 255, 0.05);
  font-family: "Damion", cursive;
  border: none;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;
  &:hover {
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5),
      inset -3px -3px 7px rgba(255, 255, 255, 0.05);
    color: #3498db;
    transition: 500ms;
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const handleLogin = (e) => {
    try {
      if (userData.email === "abc" && userData.name === "Girish") {
        e.preventDefault();
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <Container>
      <form>
        <Input
          placeholder="Full name"
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <br />
        <Input
          placeholder="Email"
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button
          //className="text-white text-lg inline-block cursor-pointer will-change-transform shadow-lg px-4 rounded bg-blue-700"
          onClick={handleLogin}
        >
          Begin Experience
        </Button>
      </form>
    </Container>
  );
};

export default Login;
