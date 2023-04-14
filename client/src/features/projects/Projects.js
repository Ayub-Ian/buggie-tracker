import React from "react";
import { useNavigate } from "react-router-dom";
import client from "../../utils/network";

function Projects() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const response = await client.logout();
    localStorage.clear()
    navigate("/login");
  };
  return (
    <center>
      <h1>All projects</h1>
      <button onClick={handleLogout}>Logout</button>
    </center>
  );
}

export default Projects;
