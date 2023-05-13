import React, { useState } from 'react'
import { Modal } from '../../components/misc/Modal'
import client from '../../utils/network';
import Loader from '../../components/misc/Loader';

function AddProjectMember({ id, setShowAddMember, onCompleted , nonMembers}) {
    const [addMemberId, setAddMemberId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const nonMemberOptions =
    nonMembers &&
    nonMembers.map((member) => (
      <option key={member.id} value={member.id}>
        {member.name}
      </option>
    ));

    const addMemberToProject = async (e) => {
        e.preventDefault();
        const data = {
          user_id: parseInt(addMemberId),
        };
    
        setLoading(true);
        try {
          const res = await client.addMemberToProject(id, data);
          onCompleted(true);
          setShowAddMember(false)
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };
    
  return (
    <Modal title="Add member" setShowModal={setShowAddMember}>
    {error && !loading ? (
      <div className=" tw-border tw-border-red-300 tw-bg-red-200 tw-text-red-800 tw-p-3 tw-w-full tw-mb-2">
        {error.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </div>
    ) : null}
    <form onSubmit={addMemberToProject}>
      <div className=" tw-space-y-3 tw-w-full ">
        <div className="tw-flex tw-flex-col tw-space-y-2 tw-w-full">
          <label>Choose user</label>
          <select
            name="assigned_to"
            onChange={(e) => setAddMemberId(e.target.value)}
            value={addMemberId}
            className=" tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
          >
            <option value="">Please choose an option</option>
            {nonMemberOptions}
          </select>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <input
            className="tw-bg-emerald-500 tw-w-full tw-text-white active:tw-bg-emerald-600 tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-2 tw-rounded-lg tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
            type="submit"
            value="Add collaborator"
          />
        )}
      </div>
    </form>
  </Modal>
  )
}

export default AddProjectMember