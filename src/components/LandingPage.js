//import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className=" h-fit">
      <h1 className="text-white text-2xl">Welcome to XRC</h1>
      <Link to="/login">
        <button className="text-white text-lg inline-block cursor-pointer will-change-transform shadow-lg px-4 rounded bg-blue-700">
          Login
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
