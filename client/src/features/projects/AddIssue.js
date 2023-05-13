import React, { useState } from "react";
import { Modal } from "../../components/misc/Modal";
import client from "../../utils/network";
import Loader from "../../components/misc/Loader";

function AddIssue({
  id,
  setShowModal,
  projectMembers,
  onCompleted,
  onAddIssue,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    summary: "",
    priority: "",
    assigned_to: "",
    issue_steps: "",
    user_identified: localStorage.getItem("uid"),
    project_id: id,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const memberOptions =
    projectMembers &&
    projectMembers.map((member) => (
      <option key={member.id} value={member.id}>
        {member.name}
      </option>
    ));

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const createIssue = async (e) => {
    e.preventDefault();

    const data = {
      title: formData.title,
      description: formData.description,
      summary: formData.summary,
      priority: parseInt(formData.priority),
      assigned_to: parseInt(formData.assigned_to),
      issue_steps: formData.issue_steps,
      user_identified: parseInt(formData.user_identified),
      project_id: parseInt(formData.project_id),
    };

    setLoading(true);
    try {
      const res = await client.createIssue(data);
      onCompleted();
      setShowModal(false);
    } catch (error) {
      setError(error.response.data.data);
      console.log(error);
    }
    setLoading(false);
  };

  return (
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
            <span className="tw-text-xs tw-text-slate-500">
              Separate steps with a comma i.e ,
            </span>
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
              {memberOptions}
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
  );
}

export default AddIssue;
