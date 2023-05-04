import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/misc/Loader";
import { Modal } from "../../components/misc/Modal";
import client from "../../utils/network";
import IssueList from "./IssueList";

function ProjectDetail() {
  let { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    summary: "",
    status: "",
    priority: "",
    assigned_to: "",
    issue_steps: "",
    user_identified: localStorage.getItem("uid"),
    project_id: id,
  });

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const getProjectDetail = async () => {
    setLoading(true);
    try {
      const res = await client.getProjectDetail(id);
      setProject(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const createIssue = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    getProjectDetail();
  }, []);

  if (!project) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div className=" tw-container tw-flex tw-gap-x-8">
      {/* filter section  */}
      <div className=" tw-w-80 tw-pt-7">
        <div className=" tw-bg-sky-100 tw-px-5 tw-pt-5 tw-pb-10 tw-space-y-5 tw-rounded-lg">
          <div className="tw-flex tw-items-center tw-justify-between">
            <h3 className=" tw-text-slate-900 tw-font-medium">Filters</h3>
            <button className=" tw-text-sm tw-text-slate-500">Clear all</button>
          </div>
          <input
            type="text"
            placeholder="Search issues..."
            className=" tw-w-full tw-rounded-lg tw-p-1 placeholder:tw-text-sm"
          />
          <div>
            <h5 className=" tw-text-sm tw-uppercase tw-text-slate-700 tw-mb-2">
              Show
            </h5>
            <div className="tw-flex tw-items-center tw-space-x-2">
              <input
                type="checkbox"
                value="all"
                className=" tw-bg-transparent"
              />
              <label className=" tw-text-sm">All</label>
            </div>
            <div className="tw-flex tw-items-center tw-space-x-2">
              <input
                type="checkbox"
                value="all"
                className=" tw-bg-transparent"
              />
              <label className=" tw-text-sm">Assigned to me</label>
            </div>
          </div>
          <div>
            <h5 className=" tw-text-sm tw-uppercase tw-text-slate-700 tw-mb-2">
              Status
            </h5>
            <div className="tw-flex tw-items-center tw-space-x-2">
              <input
                type="checkbox"
                value="all"
                className=" tw-bg-transparent"
              />
              <label className=" tw-text-sm">Open</label>
            </div>
            <div className="tw-flex tw-items-center tw-space-x-2">
              <input
                type="checkbox"
                value="all"
                className=" tw-bg-transparent"
              />
              <label className=" tw-text-sm">Closed</label>
            </div>
            <div className="tw-flex tw-items-center tw-space-x-2">
              <input
                type="checkbox"
                value="all"
                className=" tw-bg-transparent"
              />
              <label className=" tw-text-sm">In-Progress</label>
            </div>
            <div className="tw-flex tw-items-center tw-space-x-2">
              <input
                type="checkbox"
                value="all"
                className=" tw-bg-transparent"
              />
              <label className=" tw-text-sm">Resolved</label>
            </div>
          </div>
          <div>
            <h5 className=" tw-text-sm tw-uppercase tw-text-slate-700 tw-mb-2">
              Creation date
            </h5>
            <input
              type="date"
              value=""
              className=" tw-w-full tw-rounded-lg tw-text-sm tw-p-1"
            />
          </div>
        </div>
      </div>

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
          <div className="tw-flex tw-items-center tw-space-x-6">
            <div>
              <p className=" tw-uppercase tw-text-accent-gray tw-text-sm tw-font-medium">
                total issues
              </p>
              <p>3</p>
            </div>
            <div>
              <p className=" tw-uppercase tw-text-accent-gray tw-text-sm tw-font-medium">
                Members
              </p>
              <p>3</p>
            </div>
          </div>

          <div className=" tw-space-x-4">
            <button
              onClick={() => setShowModal(true)}
              className="tw-text-sm tw-rounded-lg tw-bg-sky-500  tw-text-white tw-py-1.5 tw-px-3"
            >
              Create new issue
            </button>
            <button className="tw-text-sm tw-rounded-lg tw-bg-sky-500  tw-text-white tw-py-1.5 tw-px-3">
              Add members
            </button>
          </div>

          <div>
            <div className=" tw-h-8 tw-w-8 tw-bg-sky-500 tw-relative tw-rounded-full">
              {/* <ChevronDownIcon className=" tw-h-5 tw-w-5 center tw-text-white" /> */}
            </div>
          </div>
        </div>

        <IssueList issues={project.issues} />
      </div>

      {showModal ? (
        <Modal title="Create issue" setShowModal={setShowModal}>
          {error && !loading ? (
            <div className=" tw-border tw-border-red-300 tw-bg-red-200 tw-text-red-800 tw-p-3 tw-w-full tw-mb-2">
              {error.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </div>
          ) : null}
          <form onSubmit={createIssue}>
            <div className=" tw-grid tw-grid-cols-2 tw-gap-3 tw-w-full ">
              <div className="tw-flex tw-flex-col tw-space-y-2 tw-w-full">
                <label>Title</label>
                <input
                  className="  tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div className="tw-flex tw-flex-col tw-space-y-2 tw-w-full">
                <label>Summary</label>
                <input
                  className=" tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
                  type="text"
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                />
              </div>
              <div className="tw-flex tw-flex-col tw-space-y-2 tw-w-full">
                <label>Description</label>
                <textarea
                  className=" tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
                  rows="4"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="tw-flex tw-flex-col tw-space-y-2 tw-w-full">
                <label>Steps to recreate</label>
                <textarea
                  className=" tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
                  rows="4"
                  name="issue_steps"
                  value={formData.issue_steps}
                  onChange={handleChange}
                />
              </div>

              <div className="tw-flex tw-flex-col tw-space-y-2 tw-w-full">
                <label>Priority</label>
                <select
                  name="priority"
                  onChange={handleChange}
                  value={formData.priority}
                  className=" tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
                >
                  <option value="">Please choose an option</option>
                  <option value="0">Low</option>
                  <option value="1">Medium</option>
                  <option value="2">High</option>
                </select>
              </div>

              <div className="tw-flex tw-flex-col tw-space-y-2 tw-w-full">
                <label>Assignee</label>
                <select
                  name="assigned_to"
                  onChange={handleChange}
                  value={formData.assigned_to}
                  className=" tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
                >
                  <option value="">Please choose an option</option>
                  <option value="1">Jane Doe</option>
                  <option value="2">John Doe</option>
                  <option value="3">Ian Ayub</option>
                </select>
              </div>
              {loading ? (
                <Loader />
              ) : (
                <input
                  className="tw-bg-emerald-500 tw-w-full tw-text-white active:tw-bg-emerald-600 tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-2 tw-rounded-lg tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                  type="submit"
                  value="Create issue"
                />
              )}
            </div>
          </form>
        </Modal>
      ) : null}
    </div>
  );
}

export default ProjectDetail;
