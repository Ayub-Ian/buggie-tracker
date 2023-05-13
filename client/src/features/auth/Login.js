import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthLayout } from "../../components/layouts/AuthLayout";
import Loader from "../../components/misc/Loader";
import { saveUser, storeToken } from "../../utils/auth";
import client from "../../utils/network";


function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    login_id: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  const authenticateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await client.login(loginData);
      setError(null)
      saveUser(response.data.data.user.id, response.data.data.user.name)
      storeToken(response.data.data.token)
      toast.success("Log in successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/projects");
    } catch (err) {
      setError(err.response.data.data.error);
    }
    setLoading(false);
  };
  return (
    <AuthLayout
      heading="Log in to your account"
      statement="Welcome back! Enter your credentials"
    >
      {error && !loading ? (
        <div className=" tw-border tw-border-red-300 tw-bg-red-200 tw-text-red-800 tw-p-3 tw-w-full">
            <li>{error}</li>
        </div>
      ) : null}
      <form className=" tw-w-full" onSubmit={authenticateUser} autoComplete="off">
        <div className="tw-flex tw-flex-col tw-gap-1 tw-mt-4 tw-w-full">
          <label className=" tw-font-medium">Login id</label>
          <input
            name="login_id"
            value={loginData.login_id}
            onChange={handleChange}
            type="text"
            placeholder="Username or email"
            className="form--field placeholder:tw-text-sm"
          />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1 tw-mt-4 tw-w-full">
          <label className=" tw-font-medium">Password</label>
          <input
            name="password"
            value={loginData.password}
            onChange={handleChange}
            type="password"
            placeholder="Strong password"
            className="form--field placeholder:tw-text-sm"
          />
        </div>
        <div className="tw-mt-1 tw-float-right">
          <Link
            to="/forgot_password"
            className=" tw-text-sm tw-text-accent-orange "
          >
            {" "}
            Forgot password?
          </Link>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <input
            type="submit"
            className=" tw-bg-accent-primary tw-w-full tw-py-2 tw-mt-6 tw-rounded-lg tw-font-medium tw-transition-all tw-duration-200 hover:tw-bg-accent-green hover:tw-scale-95 hover:tw-text-white"
            value="Log in"
          />
        )}
      </form>
      <span className="tw-flex tw-gap-2 tw-text-sm tw-mt-8">
        <p className=" tw-text-accent-gray">Don't have an account?</p>
        <Link
          to="/register"
          className=" tw-text-accent-orange hover:tw-underline"
        >
          Create an account
        </Link>
      </span>

      <div className=" tw-mt-10 tw-bg-cyan-100 tw-flex tw-flex-col tw-w-full tw-p-2 tw-rounded-lg tw-border tw-border-cyan-400">
        <p className=" tw-mb-2 tw-text-sm tw-font-semibold tw-text-cyan-900 tw-text-center">Login credentials</p>
        <span className=" tw-text-sm tw-text-cyan-900">Username : chef_curry</span>
        <span className=" tw-text-sm tw-text-cyan-900">Email : stephcurry@email.com</span>
        <span className=" tw-text-sm tw-text-cyan-900">Password : password123</span>
      </div>
    </AuthLayout>
  );
}

export default Login;
