import { FolderPlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import ProjectItem from "./ProjectItem";
import Search from "../../components/search";


export default function ProjectList({ projects, setShowModal, search, onSearch={onSearch} }) {
  return (
    <React.Fragment>
      <div className="tw-flex tw-pt-3 tw-justify-between">
        <div>
          <Search placeholder="Search projects" search={search} onSearch={onSearch} />
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
