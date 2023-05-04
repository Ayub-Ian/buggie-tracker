import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

function IssueItem({issue}) {
    let date = new Date(issue.created_at)
    let today = new Date()

    const days = (date_1, date_2) =>{
        let difference = date_1.getTime() - date_2.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }
  return (
    <Link
    to={`/issue/${issue.id}`}
    className="tw-group tw-block issue--item tw-mb-4 tw-mx-auto tw-rounded-lg tw-p-6 tw-bg-white tw-ring-1 tw-ring-slate-900/5 tw-shadow-lg tw-space-y-2 hover:tw-bg-sky-500 hover:tw-ring-sky-500"
  >
    <div className="tw-flex tw-items-center  tw-gap-2 ">
      <p className=" tw-uppercase tw-text-xs  group-hover:tw-text-white tw-text-slate-500 tw-font-medium">
        {issue.id}
      </p>
      <div className=" tw-h-1.5 tw-w-1.5  group-hover:tw-bg-white tw-bg-accent-gray tw-rounded-full"></div>
      <p className=" tw-uppercase tw-text-xs  group-hover:tw-text-white tw-text-slate-500 tw-font-medium">
        {issue.status}
      </p>
      <div className=" tw-h-1.5 tw-w-1.5  group-hover:tw-bg-white tw-bg-accent-gray tw-rounded-full"></div>
      <p className=" tw-uppercase tw-text-xs  group-hover:tw-text-white tw-font-medium tw-text-slate-500">
       {issue.priority}
      </p>
    </div>
    <h3 className="tw-text-slate-900 group-hover:tw-text-white tw-text-xl tw-font-semibold">
     {issue.title}
    </h3>
    <p className="tw-text-slate-500 group-hover:tw-text-white tw-text-sm">
      {issue.description}
    </p>

    <div className="tw-flex  tw-gap-3 tw-font-light tw-py-1 ">
      <div className="tw-flex tw-items-center  group-hover:tw-text-white tw-gap-x-1 tw-text-accent-gray tw-font-medium">
        <CalendarDaysIcon className=" tw-h-4 tw-w-4" />
        <p className=" tw-text-xs">Reported {date.toDateString()}  at {date.toLocaleTimeString('en-US')}</p>
      </div>
      <div className="tw-flex  group-hover:tw-text-white tw-items-center tw-gap-x-1 tw-text-accent-gray tw-font-medium">
        <ClockIcon className=" tw-h-4 tw-w-4" />
        <p className=" tw-text-xs">Ongoing for {days(today, date)} days</p>
      </div>
    </div>
  </Link>
  )
}

export default IssueItem