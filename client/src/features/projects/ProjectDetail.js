import {
  CalendarDaysIcon,
  CalendarIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

function ProjectDetail() {
  return (
    <div className=" tw-container tw-flex tw-gap-x-8">
        <div className=" tw-w-80 tw-pt-7">
            <div className=" tw-bg-sky-100 tw-px-5 tw-pt-5 tw-pb-10 tw-space-y-5 tw-rounded-lg">
                <div className="tw-flex tw-items-center tw-justify-between">
                <h3 className=" tw-text-slate-900 tw-font-medium">Filters</h3>
                <button className=" tw-text-sm tw-text-slate-500">Clear all</button>
                </div>
                <input type="text" placeholder="Search issues..." className=" tw-w-full tw-rounded-lg tw-p-1 placeholder:tw-text-sm" />
                <div>
                    <h5 className=" tw-text-sm tw-uppercase tw-text-slate-700 tw-mb-2">Show</h5>
                    <div className="tw-flex tw-items-center tw-space-x-2">
                        <input type="checkbox" value="all" className=" tw-bg-transparent" />
                        <label className=" tw-text-sm">All</label>
                    </div>
                    <div className="tw-flex tw-items-center tw-space-x-2">
                        <input type="checkbox" value="all" className=" tw-bg-transparent" />
                        <label className=" tw-text-sm">Assigned to me</label>
                    </div>
                </div>
                <div>
                    <h5 className=" tw-text-sm tw-uppercase tw-text-slate-700 tw-mb-2">Status</h5>
                    <div className="tw-flex tw-items-center tw-space-x-2">
                        <input type="checkbox" value="all" className=" tw-bg-transparent" />
                        <label className=" tw-text-sm">Open</label>
                    </div>
                    <div className="tw-flex tw-items-center tw-space-x-2">
                        <input type="checkbox" value="all" className=" tw-bg-transparent" />
                        <label className=" tw-text-sm">Closed</label>
                    </div>
                    <div className="tw-flex tw-items-center tw-space-x-2">
                        <input type="checkbox" value="all" className=" tw-bg-transparent" />
                        <label className=" tw-text-sm">In-Progress</label>
                    </div>
                    <div className="tw-flex tw-items-center tw-space-x-2">
                        <input type="checkbox" value="all" className=" tw-bg-transparent" />
                        <label className=" tw-text-sm">Resolved</label>
                    </div>
                </div>
                <div>
                    <h5 className=" tw-text-sm tw-uppercase tw-text-slate-700 tw-mb-2">Creation date</h5>
                        <input type="date" value="" className=" tw-w-full tw-rounded-lg tw-text-sm tw-p-1" />



                </div>
            </div>
            
        </div>


    <div className=" tw-container">
      <div className="tw-flex tw-justify-between tw-py-7 tw-border-b tw-border-accent-primary">
        <h1 className=" tw-uppercase tw-font-medium tw-text-xl">Project A</h1>
        <button className=" tw-bg-slate-200 tw-px-2  tw-outline-none tw-border-none tw-rounded-lg tw-text-white">
          <EllipsisHorizontalIcon className=" tw-h-5 tw-w-5 tw-text-black " />
        </button>
      </div>
      <div className="tw-flex tw-pt-3 tw-justify-between">
        <div>
          <p className=" tw-uppercase tw-text-accent-gray tw-text-sm tw-font-medium">
            total issues
          </p>
          <p>3</p>
        </div>
        <div>
          <div className=" tw-h-8 tw-w-8 tw-bg-sky-500 tw-relative tw-rounded-full">
            <PlusIcon className=" tw-h-5 tw-w-5 center tw-text-white" />
          </div>
        </div>
      </div>
      <div className=" tw-mt-5">
        <Link
          to="/project/1"
          className="tw-group tw-block issue--item  tw-mx-auto tw-rounded-lg tw-p-6 tw-bg-white tw-ring-1 tw-ring-slate-900/5 tw-shadow-lg tw-space-y-2 hover:tw-bg-sky-500 hover:tw-ring-sky-500"
        >
          <div className="tw-flex tw-items-center tw-gap-2 ">
            <p className=" tw-uppercase tw-text-xs tw-text-slate-500 tw-font-medium">1012</p>
            <div className=" tw-h-1.5 tw-w-1.5 tw-bg-accent-gray tw-rounded-full"></div>
            <p className=" tw-uppercase tw-text-xs tw-text-slate-500 tw-font-medium">open</p>
            <div className=" tw-h-1.5 tw-w-1.5 tw-bg-accent-gray tw-rounded-full"></div>
            <p className=" tw-uppercase tw-text-xs tw-font-medium tw-text-slate-500"> high</p>
          </div>
          <h3 className="tw-text-slate-900 group-hover:tw-text-white tw-text-xl tw-font-semibold">
            Website not responsive to server
          </h3>
          <p className="tw-text-slate-500 group-hover:tw-text-white tw-text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            vehicula ipsum ut malesuada semper..
          </p>

          <div className="tw-flex tw-gap-3 tw-font-light tw-py-1 ">
            <div className="tw-flex tw-items-center tw-gap-x-1 tw-text-accent-gray tw-font-medium">
              <CalendarDaysIcon className=" tw-h-4 tw-w-4" />
              <p className=" tw-text-xs">Reported Feb 14th 2023 at 9.30pm</p>
            </div>
            <div className="tw-flex tw-items-center tw-gap-x-1 tw-text-accent-gray tw-font-medium">
              <ClockIcon className=" tw-h-4 tw-w-4" />
              <p className=" tw-text-xs">Ongoing for 3 days</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default ProjectDetail;
