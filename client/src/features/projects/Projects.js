import { FaceFrownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/misc/Loader";
import { Modal } from "../../components/misc/Modal";
import client from "../../utils/network";
import ProjectList from "./ProjectList";

function Projects() {
  const [projects, setProjects] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    start_date: "",
    end_date: ""
  });

  const allProducts = async () => {
    setLoading(true);
    try {
      const response = await client.getAllProjects();
      setError(null);
      setProjects(response.data.data);
    } catch (error) {
      setError(error.response.data);
    }
    setLoading(false);
  };

  const resetForm = () => setFormData({
    name: "",
    description: "",
    start_date: "",
    end_date: "",
  })

  // handle input value change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // create new project
  const createProject = async (e) => {
    e.preventDefault();
    console.log({ formData });
    setLoading(true);
    try {
      const res = await client.createProject(formData);
      const data = res.data.data
      onAddProject(data)
      setError(null);
      setShowModal(false)
      toast.success("Project created successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      resetForm()
    } catch (error) {
      console.log(error);
      setError(error.response.data.data);
    }
    setLoading(false);
  };

  function onAddProject(data) {
    let updatedData = data
    setProjects([...projects, updatedData])
  }

  function handleSearch(input) {
    setSearch(input)
  }

  useEffect(() => {
    allProducts();
  }, []);

  let filteredProjects = projects && projects.filter(project => project.name.toLowerCase().includes(search.toLowerCase()))

  
  return (
    <div className=" tw-container">
      <div className="tw-flex tw-justify-between tw-py-7 tw-border-b tw-border-accent-primary">
        <h1 className=" tw-uppercase tw-font-medium tw-text-xl">My projects</h1>
        <button
          onClick={() => setShowModal(true)}
          className=" tw-bg-sky-500 tw-px-2.5 tw-py-1.5 tw-outline-none tw-border-none tw-rounded-lg tw-text-white"
        >
          New project
        </button>
      </div>

      {!projects ? (
        <div className=" tw-flex tw-items-center tw-flex-col tw-space-y-14 tw-text-accent-gray center">
          <FaceFrownIcon className=" tw-h-24 tw-w-24" />
          <p className=" tw-text-4xl">No available projects</p>
        </div>
      ) : (
        <ProjectList projects={filteredProjects} setShowModal={setShowModal} search={search} onSearch={handleSearch} />
      )}

      {showModal ? (
        <Modal title="Create project" setShowModal={setShowModal}>
                {error && !loading ? (
        <div className=" tw-border tw-border-red-300 tw-bg-red-200 tw-text-red-800 tw-p-3 tw-w-full tw-mb-2">
          {error.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </div>
      ) : null}
          <form onSubmit={createProject}>
            <div className=" tw-space-y-3">
              <div className="tw-flex tw-flex-col tw-space-y-2 tw-w-full">
                <label>Project name</label>
                <input
                  className="  tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="tw-flex tw-flex-col tw-space-y-2 tw-w-full">
                <label>Start date</label>
                <input
                  className=" tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
                  type="date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleChange}
                />
              </div>
              <div className="tw-flex tw-flex-col tw-space-y-2 tw-w-full">
                <label>End date</label>
                <input
                  className=" tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
                  type="date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                />
              </div>
              <div className="tw-flex tw-flex-col tw-space-y-2 tw-w-full">
                <label>Description</label>
                <textarea
                  className=" tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
                  rows="4"
                  type="date"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              {loading ? (
                <Loader />
              ) : (
                <input
                  className="tw-bg-emerald-500 tw-w-full tw-text-white active:tw-bg-emerald-600 tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-2 tw-rounded-lg tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                  type="submit"
                  value="Create project"
                />
              )}
            </div>
          </form>
        </Modal>
      ) : null}
    </div>
  );
}

export default Projects;
