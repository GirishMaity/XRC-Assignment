import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  background: rgba(234, 243, 244, 1);
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

  background: linear-gradient(
      95.73deg,
      rgba(0, 118, 135, 0.08) 0.9%,
      rgba(0, 118, 135, 0.06) 52.54%,
      rgba(0, 118, 135, 0.02) 99.06%
    ),
    rgba(235, 240, 241, 0.3);
  border-radius: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 24px;

  text-align: center;

  /* Silver/700 */

  color: #3f455a;
`;

const Input = styled.input`
  position: relative;
  top: 4rem;
  width: 17rem;
  height: 2rem;

  background: #e1e3ea;

  box-shadow: inset -3px -3px 6px #ffffff, inset 3px 3px 6px #c4c7d4;
  border-radius: 10px;
  &:focus {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.5),
      inset -1px -1px 2px rgba(255, 255, 255, 0.05);
    transition: 0.3s;
  }
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
            placeholder=" Full name"
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <Input
            placeholder=" Email"
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
