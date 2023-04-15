import {
  FolderOpenIcon,
  FolderPlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import client from "../../utils/network";

function Projects() {
  return (
    <div className=" tw-container">
      <div className="tw-flex tw-justify-between tw-py-7 tw-border-b tw-border-accent-primary">
        <h1 className=" tw-uppercase tw-font-medium tw-text-xl">My projects</h1>
        <button className=" tw-bg-sky-500 tw-px-2.5 tw-py-1.5 tw-outline-none tw-border-none tw-rounded-lg tw-text-white">
          New project
        </button>
      </div>
      <div className="tw-flex tw-pt-3 tw-justify-between">
        <div>
          <p className=" tw-uppercase tw-text-accent-gray">total projects</p>
          <p>3</p>
        </div>
        <div>
          <div className=" tw-w-72 tw-relative">
            <input
              type="text"
              className=" tw-bg-accent-smoke tw-outline-none tw-w-full tw-px-4 tw-py-2 tw-rounded-lg"
              placeholder="Search projects ...."
            />
            <MagnifyingGlassIcon className=" tw-h-5 tw-w-5 tw-absolute tw-text-accent-gray tw-bottom-1/4 tw-right-4 " />
          </div>
        </div>
      </div>
      <div className=" tw-mt-5 tw-grid tw-grid-cols-3 tw-gap-4">
      <Link
      to="/project/1"
        className="tw-group tw-block  tw-mx-auto tw-rounded-lg tw-p-6 tw-bg-white tw-ring-1 tw-ring-slate-900/5 tw-shadow-lg tw-space-y-3 hover:tw-bg-sky-500 hover:tw-ring-sky-500"
      >
        <div className="tw-flex tw-items-center tw-space-x-3">
          <FolderOpenIcon className=" tw-h-6 tw-w-6 tw-stroke-sky-500 group-hover:tw-stroke-white" />
          <h3 className="tw-text-slate-900 group-hover:tw-text-white tw-text-xl tw-font-semibold">
            New project
          </h3>
        </div>
        <p className="tw-text-slate-500 group-hover:tw-text-white tw-text-sm">
          Create a new project from a variety of starting templates.
        </p>
        <div className="project--details">
          <ul className="group-hover:tw-text-white tw-text-slate-500 tw-text-xs tw-w-full ">
            <li className="tw-flex tw-justify-between tw-font-light tw-py-1 tw-border-b tw-border-slate-200 group-hover:tw-border-white ">
              <p className="tw-capitalize">created on</p>
              <p>03/12/2020</p>
            </li>
            <li className="tw-flex tw-justify-between tw-font-light tw-py-1 tw-border-b tw-border-slate-200 group-hover:tw-border-white">
              <p className="tw-capitalize">total issues</p>
              <p>100</p>
            </li>
            <li className="tw-flex tw-justify-between tw-font-light tw-py-1 tw-border-b tw-border-slate-100 group-hover:tw-border-white last-of-type:tw-border-none">
              <p className="tw-capitalize">assigned issues</p>
              <p>10</p>
            </li>
          </ul>
        </div>

      </Link>

      <div className="tw-border tw-rounded-lg tw-border-dashed tw-relative">
        <div className="center tw-h-12 tw-w-12 tw-bg-sky-500 tw-relative tw-rounded-full">
          <FolderPlusIcon className=" tw-h-6 tw-w-6 center tw-text-white" />
        </div>
      </div>
      </div>

    </div>
  );
}

export default Projects;
