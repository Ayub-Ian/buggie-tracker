import React, { useState } from 'react'
import client from '../../utils/network';
import { toast } from "react-toastify";


function AddComment({id, onAddComment}) {

    const [comment, setComment] = useState("");

    const addComment = async (e) => {
        e.preventDefault()
        try {
            const data = {
                comment: comment,
                user_id: parseInt(localStorage.getItem("uid")),
                issue_id: parseInt(id)
            }
            const res = await client.addComment(data)
            onAddComment(true)
            setComment("")
        } catch (error) {
            toast.error(error.response.data.data[0], {
                position: toast.POSITION.TOP_RIGHT,
              });
        }
    }
    
  return (
    
    <form onSubmit={addComment} autoComplete='off'>
      <textarea
        className=" tw-bg-accent-smoke tw-w-full tw-py-1.5 tw-px-4 tw-rounded-lg tw-border tw-border-accent-primary tw-outline-none tw-border-none focus:tw-bg-white focus:tw-outline-1 focus:tw-outline-accent-orange "
        placeholder="Write a comment"
        rows="6"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input
        className="tw-bg-emerald-500 tw-float-right tw-text-white active:tw-bg-emerald-600 tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-2 tw-rounded-lg tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
        type="submit"
        value="Comment"
      />
    </form>
  )
}

export default AddComment