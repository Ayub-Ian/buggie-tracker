import { FolderOpenIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

function ProjectItem({ project }) {
    const {id,name, description, start_date, issue_count} = project
  return (
    <Link
    to={`/project/${id}`}
    className="tw-group tw-block tw-w-full tw-mx-auto tw-rounded-lg tw-p-6 tw-bg-white tw-ring-1 tw-ring-slate-900/5 tw-shadow-lg tw-space-y-3 hover:tw-bg-sky-500 hover:tw-ring-sky-500"
  >
    <div className="tw-flex tw-items-center tw-space-x-3">
      <FolderOpenIcon className=" tw-h-6 tw-w-6 tw-stroke-sky-500 group-hover:tw-stroke-white" />
      <h3 className="tw-text-slate-900 group-hover:tw-text-white tw-text-xl tw-font-semibold">
        {name}
      </h3>
    </div>
    <p className="tw-text-slate-500 group-hover:tw-text-white tw-text-sm">
      {description}
    </p>
    <div className="project--details">
      <ul className="group-hover:tw-text-white tw-text-slate-500 tw-text-xs tw-w-full ">
        <li className="tw-flex tw-justify-between tw-font-light tw-py-1 tw-border-b tw-border-slate-200 group-hover:tw-border-white ">
          <p className="tw-capitalize">created on</p>
          <p>{start_date}</p>
        </li>
        <li className="tw-flex tw-justify-between tw-font-light tw-py-1 tw-border-b tw-border-slate-200 group-hover:tw-border-white">
          <p className="tw-capitalize">total issues</p>
          <p>{issue_count}</p>
        </li>
      </ul>
    </div>
  </Link>
  )
}

export default ProjectItem