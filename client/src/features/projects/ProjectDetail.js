import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../utils/network";
import IssueList from "./IssueList";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import AddIssue from "./AddIssue";
import AddProjectMember from "./AddProjectMember";

function ProjectDetail() {
  let { id } = useParams();

  const [project, setProject] = useState(null);
  const [projectMembers, setProjectMembers] = useState(null);
  const [nonMembers, setNonMembers] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);
  const [completed, setCompleted] = useState(false);

  const getProjectDetail = async () => {
    try {
      const res = await client.getProjectDetail(id);
      setProject(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProjectMembers = async () => {
    try {
      const projectMembers = await client.getProjectMembers(id);
      setProjectMembers(projectMembers.data.members);
    } catch (error) {
      console.log(error);
    }
  };

  const getNonMembers = async () => {
    try {
      const nonMembers = await client.getNotProjectMembers(id);
      setNonMembers(nonMembers.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = () => setCompleted(true);

  useEffect(() => {
    getProjectDetail();
    getProjectMembers();
    getNonMembers();
  }, [completed]);

  if (!project) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div className=" tw-container tw-flex tw-gap-x-8">
      <div className=" tw-container">
        <div className="tw-flex tw-justify-between tw-py-7 tw-border-b tw-border-accent-primary">
          <h1 className=" tw-uppercase tw-font-medium tw-text-xl">
            {project.name}
          </h1>
          <button className=" tw-bg-slate-200 tw-px-2  tw-outline-none tw-border-none tw-rounded-lg tw-text-white">
            <EllipsisHorizontalIcon className=" tw-h-5 tw-w-5 tw-text-black " />
          </button>
        </div>
        <div className="tw-flex tw-pt-3 tw-items-end tw-justify-between">
          <div className=" tw-space-x-4">
            <button
              onClick={() => setShowModal(true)}
              className="tw-text-sm tw-rounded-lg tw-bg-sky-500  tw-text-white tw-py-1.5 tw-px-3"
            >
              Create new issue
            </button>
            <button
              onClick={() => setShowAddMember(true)}
              className="tw-text-sm tw-rounded-lg tw-bg-sky-500  tw-text-white tw-py-1.5 tw-px-3"
            >
              Add members
            </button>
          </div>
        </div>
        {project.issues.length === 0 ? (
          <div className=" tw-flex tw-items-center tw-flex-col tw-space-y-14 tw-text-accent-gray center">
            <FaceFrownIcon className=" tw-h-24 tw-w-24" />
            <p className=" tw-text-4xl">No available issues</p>
          </div>
        ) : (
          <IssueList issues={project.issues} />
        )}
      </div>

      {showModal ? (
        <AddIssue
          id={id}
          setShowModal={setShowModal}
          projectMembers={projectMembers}
          onCompleted={handleComplete}
        />
      ) : null}

      {showAddMember ? (
        <AddProjectMember
          id={id}
          setShowAddMember={setShowAddMember}
          nonMembers={nonMembers}
          onCompleted={(completed) => setCompleted(completed)}
        />
      ) : null}
    </div>
  );
}

export default ProjectDetail;
