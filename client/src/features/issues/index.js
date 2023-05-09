import React, { useEffect, useState } from "react";
import IssueList from "./IssueList";
import client from "../../utils/network";
import Search from "../../components/search";

function Issues() {
  const [issues, setIssues] = useState(null)
  const [search, setSearch] = useState("")

  const getAllIssues = async () => {
    try {
      const res = await client.getAllIssues()
      setIssues(res.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    getAllIssues()
  }, [])
  

const filteredIssues = issues && issues.filter(issue => issue.title.toLowerCase().includes(search.toLowerCase()))

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
            <Search placeholder="Search issues" search={search} onSearch={(input) => setSearch(input)} />
          </div>
        </div>

      </div>
      
      <IssueList issues={filteredIssues}/>

    </div>
  );
}

export default Issues;
