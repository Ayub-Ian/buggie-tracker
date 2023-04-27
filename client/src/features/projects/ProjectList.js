import { FolderPlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import ProjectItem from "./ProjectItem";


export default function ProjectList({ projects, setShowModal }) {
  return (
    <React.Fragment>
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
          {projects.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}


        <div className="tw-border tw-min-h-[166px] tw-rounded-lg tw-border-dashed tw-relative">
          <div className="center tw-h-12 tw-w-12 tw-bg-sky-500 tw-relative tw-rounded-full">
            <FolderPlusIcon onClick={() => setShowModal(true)} className=" tw-h-6 tw-w-6 center tw-text-white" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
