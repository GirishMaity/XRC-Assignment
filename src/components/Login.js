import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  background: #2c2f33;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

const Container = styled.div`
  // position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 500px;
  left: 532px;
  top: 62px;

  border-radius: 24px;
  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #3b4451,
    6.22302px 6.22302px 18.6691px #000000;
`;

const Text = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 303px;
  // height: 24px;
  // left: 36px;
  // top: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 24px;

  text-align: center;

  /* Silver/700 */

  color: rgba(255, 255, 255, 1);
`;

const Input = styled.input`
  position: relative;
  top: 4rem;
  width: 17rem;
  height: 2.5rem;


  border-radius: 10px;
  background: #2c2f33;
  box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.25),
      inset -2px -2px 8px rgba(0, 0, 0, 0.25);
  
  //border-radius: 12.446px;
  &:focus {
    box-shadow: inset -6.22302px -6.22302px 6.22302px #3b4451,
    inset 3.73381px 3.73381px 6.22302px #000000;
    outline: none;
`;

const Button = styled.button`
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  position: relative;
  width: 303px;
  height: 44px;
  //left: 36px;
  top: 6rem;

  background-color: #008bf8;
  color: #fff;
  border-radius: 12px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5),
    -3px -3px 7px rgba(255, 255, 255, 0.05);
  transition: 0.3s;
  &:focus {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.5),
      inset -1px -1px 2px rgba(255, 255, 255, 0.05);
    transition: 0.3s;
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
    <Background>
      <Container>
        <Text>Login</Text>
        <form>
          <Input
            placeholder="  Full name"
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <Input
            placeholder="  Email"
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
    </Background>
  );
};

export default Login;
