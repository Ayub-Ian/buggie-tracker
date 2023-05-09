import React from 'react'
import IssueItem from './IssueItem'

function IssueList({issues}) {
    
  return (
    <div className=" tw-mt-5">
       { issues.map(issue => (
        <IssueItem key={issue.id} issue={issue} />
       ))}   
  </div>
  )
}

export default IssueList