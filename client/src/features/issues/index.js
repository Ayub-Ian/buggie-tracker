import React, { useEffect, useState } from "react";
import IssueList from "./IssueList";
import client from "../../utils/network";


function Issues() {
  const [issues, setIssues] = useState(null)

  const getAllIssues = async () => {
    try {
      const res = await client.getAllIssues()
      console.log(res)
      setIssues(res.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {

    getAllIssues()
  }, [])
  

  if (!issues) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }

 

  return (
    <div className=" tw-container">
      <div className="tw-flex tw-justify-between tw-py-7 tw-border-b tw-border-accent-primary">
        <h1 className=" tw-uppercase tw-font-medium tw-text-xl">All Issues</h1>
      </div>
      <div className="tw-flex tw-pt-3 tw-items-end tw-justify-between">
        <div className="tw-flex tw-items-center tw-space-x-6">
          <div>
            <p className=" tw-uppercase tw-text-accent-gray tw-text-sm tw-font-medium">
              total issues
            </p>
            <p>3</p>
          </div>
        </div>

        <div>
          <div className=" tw-h-8 tw-w-8 tw-bg-sky-500 tw-relative tw-rounded-full">
            {/* <ChevronDownIcon className=" tw-h-5 tw-w-5 center tw-text-white" /> */}
          </div>
        </div>
      </div>
      
      <IssueList issues={issues}/>

    </div>
  );
}

export default Issues;
