import axios from "axios";
import { getToken } from "./auth";

const instance = () =>
  axios.create({
    baseURL: "http://localhost:3000",
    timeout: 60000,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + getToken(),
    },
  });

const register = (data) => {
  return instance().post("/register", data);
};

const login = (data) => {
  return instance().post("/login", data);
};

const logout = () => {
  return instance().delete("/logout");
};

// POST requests

const createProject = (data) => {
  return instance().post("/projects", data);
};

const createIssue = (data) => {
  return instance().post("/issues", data);
}


// GET requests 
const getAllProjects = () => {
  return instance().get("/projects");
};

const getProjectDetail = (id) => {
  return instance().get(`/projects/${id}`);
};

const getIssueDetail = (id) => {
  return instance().get(`/issues/${id}`);
};

const getProjectMembers = (id) => {
  return instance().get(`/projects/${id}/project_members`);
};

// PUT rewquests

// DELETE requests

const client = {
  register,
  login,
  logout,
  getAllProjects,
  createProject,
  getProjectDetail,
  getIssueDetail,
  getProjectMembers, createIssue
};

export default client;
