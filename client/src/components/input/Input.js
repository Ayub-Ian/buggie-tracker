import React from 'react'

function Input({ label, type, placeholder = null, }) {
  return (
    <div className='tw-flex tw-flex-col tw-gap-1 tw-mt-4 tw-w-full'>
    <label className=' tw-font-medium'>{label}</label>
    <input type={type} placeholder={placeholder} className='form--field placeholder:tw-text-sm' />
</div>
  )
}

export default Input