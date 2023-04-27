import React from 'react'

export const Modal = ({ title, setShowModal, children }) => {
  return (
    <>
    <div
      className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none"
    >
      <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-min-w-[420px] tw-max-w-3xl">
        {/*content*/}
        <div className="tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-flex tw-flex-col tw-w-full tw-bg-white tw-outline-none focus:tw-outline-none">
          {/*header*/}
          <div className="tw-flex tw-items-start tw-justify-between tw-p-5 tw-border-b tw-border-solid tw-border-slate-200 tw-rounded-t">
            <h3 className="tw-text-2xl tw-font-semibold">
              {title}
            </h3>
            <button
              className="tw-text-red-500 tw-background-transparent tw-font-bold tw-uppercase  tw-py-2 tw-text-sm tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>

          <div className='tw-my-6 tw-px-5'>
            {children}
          </div>


        </div>
      </div>
    </div>
    <div className="tw-opacity-25 tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
  </>
  )
}
