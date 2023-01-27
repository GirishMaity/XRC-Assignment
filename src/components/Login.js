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
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  background-color: #292929;
  color: #fff;
  font-size: 18px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
    display: flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
 font-family: inherit;
 font-size: 13px;
 font-weight: 500;
 text-transform: uppercase;
 letter-spacing: 0.4px;
 color: #7e97b8;
 background-color: #e0e8ef;
 border-style: solid;
 border-width: 2px 100px 2px 100px;
 border-color: rgba(255, 255, 255, 0.333);
 border-radius: 40px 40px 40px 40px;
 padding: 16px 24px 16px 28px;
 transform: translate(0px, 0px) rotate(0deg);
 transition: 0.2s;
 box-shadow: -2px -1px 8px 0px #ffffff, 4px 2px 16px 0px rgb(95 157 231 / 48%);
}

  &:hover {
    color: #516d91;
 background-color: #E5EDF5;
 box-shadow: -1px -0.5px 4px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
  }
  &:active {
     box-shadow: none;
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
        <Button
          className="text-white text-lg inline-block cursor-pointer will-change-transform shadow-lg px-4 rounded bg-blue-700"
          onClick={handleLogin}
        >
          Begin Experience
        </Button>
      </form>
    </Container>
  );
};

export default Login;
