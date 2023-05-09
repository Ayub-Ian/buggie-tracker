import {
  HashtagIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import client from "../../utils/network";

function Navbar() {
    const navigate = useNavigate();
    const handleLogout = async () => {
      const response = await client.logout();
      localStorage.clear()
      navigate("/login");
    };
  return (
    <div className=" tw-bg-accent-smoke">
      <div className=" tw-container tw-py-3 ">
        <div className=" tw-flex tw-items-center tw-justify-between">
          <div className="tw-flex tw-items-end tw-gap-8">
            <img src={logo} alt="logo" />
            <nav id="topbar" className=" tw-flex">
              <NavLink
                to="/projects"
                className="tw-mr-4 tw-flex tw-items-center"
              >
                <HashtagIcon className="tw-h-5 tw-w-5 tw-mr-1" />
                Projects
              </NavLink>
              <NavLink to="/issues" className="tw-flex tw-items-center">
                <RectangleStackIcon className="tw-h-5 tw-w-5 tw-mr-1" />
                Issues
              </NavLink>
            </nav>
          </div>
          <div className="dropdown">
            <div className="tw-flex tw-items-center tw-gap-1 tw-border tw-border-accent-gray tw-rounded-lg tw-py-1 tw-px-2">
              <UserCircleIcon className="tw-h-5 tw-w-6" />
              <p>{localStorage.getItem("name")}</p>
            </div>
            <div className=" dropdown-content tw-flex tw-flex-col tw-bg-accent-primary tw-w-full tw-p-5 tw-rounded-lg">
              <Link
                to="/profile"
                className=" tw-pb-1 tw-border-b tw-border-accent-gray"
              >
                Profile
              </Link>
              <span onClick={handleLogout} className=" tw-text-red-600 tw-pt-1">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
