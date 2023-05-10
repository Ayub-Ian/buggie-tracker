import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'
import React from 'react'

function CommentItem({comment}) {
  return (
    <div className=" tw-mt-8">
    <div className=" tw-space-y-2">
      <div className=" tw-flex tw-space-x-3 tw-items-start">
        <div className=" tw-relative tw-w-fit">
          <ChatBubbleLeftEllipsisIcon className=" tw-h-4 tw-w-4 tw-absolute tw-z-10 tw-rounded-sm tw-bg-white tw-top-3/4 tw-right-0" />
          <div className=" tw-h-8 tw-w-8 tw-bg-black tw-rounded-full"></div>
        </div>
        <div className=" tw-space-y-0.5">
          <p className=" tw-font-medium">{comment.user.name}</p>
          <p className=" tw-text-xs">
            Commented on 14th Feb 2023 at 9.30pm
          </p>
        </div>
      </div>
      <p>
        {comment.comment}
      </p>
    </div>
    </div>
  )
}

export default CommentItem