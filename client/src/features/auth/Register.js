import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthLayout } from "../../components/layouts/AuthLayout";
import Loader from "../../components/misc/Loader";
import client from "../../utils/network";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const registerUser = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    try {
      const response = await client.register(formData);
      setError(null)
      toast.success('You are registered successfully!',{
        position: toast.POSITION.TOP_RIGHT
      })
      navigate('/login')
    } catch (err) {
      setError(err.response.data.data);
    }
    setLoading(false);
  };

  return (
    <AuthLayout
      heading="Create your account"
      statement="Welcome to the team! Enter your details"
    >
      {error && !loading ? (
        <div className=" tw-border tw-border-red-300 tw-bg-red-200 tw-text-red-800 tw-p-3 tw-w-full">
          {error.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </div>
      ) : null}
      <form className=" tw-w-full" onSubmit={registerUser} autoComplete="off">
        <div className="tw-flex tw-flex-col tw-gap-1 tw-mt-4 tw-w-full">
          <label className=" tw-font-medium">Full name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g Jane doe"
            className="form--field placeholder:tw-text-sm"
          />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1 tw-mt-4 tw-w-full">
          <label className=" tw-font-medium">Username</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            placeholder="e.g jane_d03"
            className="form--field placeholder:tw-text-sm"
          />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1 tw-mt-4 tw-w-full">
          <label className=" tw-font-medium">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="text"
            placeholder="e.g email@domain.com"
            className="form--field placeholder:tw-text-sm"
          />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1 tw-mt-4 tw-w-full">
          <label className=" tw-font-medium">Password</label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Strong password"
            className="form--field placeholder:tw-text-sm"
          />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1 tw-mt-4 tw-w-full">
          <label className=" tw-font-medium">Confirm password</label>
          <input
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            type="password"
            placeholder="Confirm strong password"
            className="form--field placeholder:tw-text-sm"
          />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <input
            type="submit"
            className=" tw-bg-accent-primary tw-w-full tw-py-2 tw-mt-6 tw-rounded-lg tw-font-medium tw-transition-all tw-duration-200 hover:tw-bg-accent-green hover:tw-scale-95 hover:tw-text-white"
            value="Create account"
          />
        )}
      </form>
      <span className="tw-flex tw-gap-2 tw-text-sm tw-mt-8">
        <p className=" tw-text-accent-gray">Already have an account?</p>
        <Link to="/login" className=" tw-text-accent-orange hover:tw-underline">
          Log in account
        </Link>
      </span>
    </AuthLayout>
  );
}

export default Register;
