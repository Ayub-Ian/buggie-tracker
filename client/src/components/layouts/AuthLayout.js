import React from 'react'
import logo from '../../assets/logo.svg'

export const AuthLayout = ({ heading, statement, children }) => {
  return (
    <div>
        <div className='tw-container tw-w-full tw-h-full'>
            <div className=' tw-my-4 tw-flex tw-w-full' >
                <div className='tw-flex-1 tw-relative'>
                <img src={logo} alt="logo" />
                <div className='center'>
                    <div className='tw-h-full tw-w-full tw-flex tw-flex-col tw-items-center'>
                        <div className=' tw-mb-4 '>
                            <h1 className=' tw-font-semibold tw-text-3xl tw-tracking-tight '>{heading}</h1>
                            <p className=' tw-text-accent-gray'>{statement}</p>
                        </div>
                            {children}
                        </div>                     
                    </div>                       
                </div>
                <div className='tw-flex-1  tw-relative tw-h-778'>
                    <div className=' tw-absolute tw-inset-0 tw-bg-sky-600 tw-rounded-lg tw-min-h-0'></div>
                </div>
            </div>
        </div>
    </div>

  )
}
