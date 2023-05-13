import {
  ArrowLeftIcon,
  ChartBarIcon,
  ChatBubbleLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../../utils/network";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

function IssueDetail() {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [issue, setIssue] = useState(null);
  const [complete, setComplete] = useState(false);

  const StepsRecreate = () => {
    let stepsStr = issue.issue_steps;
    let stepsArr = stepsStr.split(",");
    return (
      <>
        {stepsArr.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </>
    );
  };

  const issueDetails = async () => {
    setLoading(true);
    try {
      const res = await client.getIssueDetail(id);
      setIssue(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    issueDetails();
  }, [complete]);

  if (!issue) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }


  return (
    <div className=" tw-mt-7 ">
      <div className=" tw-container tw-flex tw-items-center tw-justify-between">
        <div className=" tw-flex tw-items-center tw-space-x-3">
          <Link
            to={`/project/${issue.project.id}`}
            className=" tw-flex tw-items-center tw-text-blue-500 tw-space-x-2"
          >
            <ArrowLeftIcon className=" tw-h-5 tw-w-5" />
            <p>{issue.project.name}</p>
          </Link>
          <span>/</span>
          <p className=" tw-font-medium">{issue.title}</p>
          <p className=" tw-text-accent-gray"># {issue.id}</p>
        </div>
        <div className=" tw-flex tw-items-center tw-space-x-5">
          <button className=" tw-bg-accent-smoke tw-py-0.5 tw-px-3 tw-rounded-lg">
            <EllipsisHorizontalIcon className=" tw-h-5 tw-w-5" />
          </button>
          <button className=" tw-flex tw-space-x-1 tw-items-center tw-border tw-border-accent-gray tw-text-accent-gray tw-py-0.5 tw-px-1.5 tw-rounded-lg">
            <LockClosedIcon className=" tw-h-5 tw-w-5 " />
            <p>Close issue</p>
          </button>
        </div>
      </div>
      <div className=" tw-bg-accent-primary tw-w-full tw-h-0.5 tw-mt-4"></div>
      <div className="tw-flex tw-container tw-divide-x ">
        {/* left panel start  */}
        <div className=" tw-flex-1 tw-flex tw-flex-col tw-justify-between tw-space-y-12 tw-pt-5 tw-pr-8 ">
          <div className="tw-flex-1">
          <div className=" tw-flex tw-space-x-3 tw-items-start">
            <div className=" tw-h-8 tw-w-8 tw-bg-black tw-rounded-full"></div>
            <div className=" tw-space-y-0.5">
              <p className=" tw-font-medium">{issue.identified_by.name}</p>
              <p className=" tw-text-xs">
                Published on 14th Feb 2023 at 9.30pm
              </p>
            </div>
          </div>
          {/* issue description  */}
          <div className=" tw-w-full tw-bg-accent-smoke tw-rounded-lg tw-mt-3 tw-py-3 tw-px-11 tw-space-y-3">
            <h3 className=" tw-font-medium">Issue description</h3>
            <p>{issue.description}</p>
            <h3 className=" tw-font-medium">Steps to recreate</h3>
            <ol className=" tw-list-decimal">
              <StepsRecreate />
            </ol>
          </div>
          {/* comments  */}
          <CommentList comments={issue.comments} />
          </div>
          

          {/* comment form  */}
          <div>
          <AddComment id={issue.id} onAddComment={(input)=>setComplete(input)} />
          </div>
        </div>

        {/* right panel start */}
        <div className=" tw-px-2 tw-pt-5 tw-space-y-4 tw-divide-y">
          <div className=" tw-space-y-1">
            <div className=" tw-flex tw-items-start tw-space-x-3 tw-text-accent-green">
              <LockOpenIcon className=" tw-h-5 tw-w-5" />
              <p className=" tw-font-medium tw-lowercase">
                {issue.status} issue
              </p>
            </div>
            <div className=" tw-flex tw-items-start tw-space-x-3 tw-text-accent-gray">
              <ChatBubbleLeftEllipsisIcon className=" tw-h-5 tw-w-5" />
              <p className=" tw-font-medium">2 comments</p>
            </div>
            <div className=" tw-flex tw-items-start tw-space-x-3">
              <ChartBarIcon className=" tw-h-5 tw-w-5" />
              <p className=" tw-font-medium tw-lowercase">
                {issue.priority} priority
              </p>
            </div>
          </div>
          <div className=" tw-py-3 tw-space-y-2.5">
            <h4 className=" tw-font-medium tw-uppercase tw-text-accent-gray">
              Details
            </h4>
            <div className=" tw-flex tw-items-center tw-space-x-2">
              <p className=" tw-text-accent-gray">Identified by:</p>
              <div className=" tw-flex tw-items-center tw-space-x-2">
                <div className=" tw-h-5 tw-w-5 tw-bg-black tw-rounded-full"></div>
                <p>{issue.identified_by.name}</p>
              </div>
            </div>
            <div className=" tw-flex tw-items-center tw-space-x-2">
              <p className=" tw-text-accent-gray"> Assigned to:</p>
              <div className=" tw-flex tw-items-center tw-space-x-2">
                <div className=" tw-h-5 tw-w-5 tw-bg-black tw-rounded-full"></div>
                <p>{issue.user_assigned.name}</p>
              </div>
            </div>
            <div className=" tw-space-y-1">
              <p className=" tw-text-accent-gray">Summary</p>
              <p className=" tw-max-w-xs">{issue.summary}</p>
            </div>
          </div>
          {issue.resolution ? (
            <div className=" tw-py-3 tw-space-y-2.5">
              <h4 className=" tw-font-medium tw-uppercase tw-text-accent-gray">
                Resolution
              </h4>
              <div className=" tw-space-y-1">
                <p className=" tw-text-accent-gray">Summary</p>
                <p className=" tw-max-w-xs">
                  Praesent auctor nunc rutrum turpis tempus, eget iaculis urna
                  facilisis. Etiam gravida eleifend urna.
                </p>
              </div>
              <div className=" tw-flex tw-items-center tw-space-x-2">
                <p className=" tw-text-accent-gray">Date:</p>
                <p>01/12/2022</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default IssueDetail;
