import React from 'react'
import CommentItem from './CommentItem'

function CommentList({comments}) {
  return (
    <React.Fragment>
    {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
    ))}
    </React.Fragment>
  )
}

export default CommentList