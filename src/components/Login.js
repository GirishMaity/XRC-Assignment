import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const handleLogin = (e) => {
    try {
      if (userData.email == "abc" && userData.name == "Girish") {
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
    <div>
      <form>
        <input
          placeholder="Full name"
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <button
          className="text-white text-lg inline-block cursor-pointer will-change-transform shadow-lg px-4 rounded bg-blue-700"
          onClick={handleLogin}
        >
          Begin Experience
        </button>
      </form>
    </div>
  );
};

export default Login;
