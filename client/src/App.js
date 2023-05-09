import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./features/auth/ForgotPassword";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import ResetPassword from "./features/auth/ResetPassword";
import Dashboard from "./features/dashboard";
import Issues from "./features/issues";
import IssueDetail from "./features/issues/IssueDetail";
import Profile from "./features/profile";
import ProjectDetail from "./features/projects/ProjectDetail";
import Projects from "./features/projects/Projects";
import Protected from "./utils/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot_password" element={<ForgotPassword />} />
          <Route path="reset_password/:token" element={<ResetPassword />} />
          <Route
            path="projects"
            element={
              <Protected>
                <Projects />
              </Protected>
            }
          />
          <Route
            path="/project/:id"
            element={
              <Protected>
                <ProjectDetail />
              </Protected>
            }
          />
          <Route
            path="issues"
            element={
              <Protected>
                <Issues />
              </Protected>
            }
          />
          <Route
            path="issue/:id"
            element={
              <Protected>
                <IssueDetail />
              </Protected>
            }
          />
          <Route
            path="profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
