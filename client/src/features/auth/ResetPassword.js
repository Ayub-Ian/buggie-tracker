import { ArrowLongLeftIcon, QrCodeIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import Input from "../../components/input/Input";

function ResetPassword() {
  return (
    <div className="tw-container tw-w-full tw-h-full">
      <div className=" tw-relative tw-h-screen">
        <div className=" tw-py-4">
          <img src={logo} alt="logo" />
          <div className="center tw-w-456">
            <div className=" tw-border tw-border-accent-green tw-rounded-lg tw-p-12 tw-relative ">
                <div className=" tw-border tw-border-accent-primary tw-rounded-lg tw-w-fit tw-p-1 tw-mb-4">
                    <QrCodeIcon className="tw-h-8 tw-w-8" />
                </div>
                <h1 className=" tw-text-3xl tw-font-semibold tw-tracking-tight ">Set new password</h1>
                <p className=" tw-text-accent-gray">Must be at least 8 characters</p>
                <form className=' tw-w-full'>
                    <Input type="password" placeholder="Your new password" label="Password" />
                    <Input type="password" placeholder="Confirm new password" label="Confirm password" />
                    <input type="submit" className=' tw-bg-accent-primary tw-w-full tw-py-2 tw-mt-6 tw-rounded-lg tw-font-medium tw-transition-all tw-duration-200 hover:tw-bg-accent-green hover:tw-scale-95 hover:tw-text-white' value='Reset password'/>
                </form>
                <div className="tw-flex tw-items-center tw-gap-2 tw-justify-center tw-mt-4 tw-w-fit tw-py-1 tw-px-2 tw-rounded-lg hover:tw-bg-accent-smoke">
                    <ArrowLongLeftIcon className="tw-h-6 tw-w-6"/>
                    <p className="tw-text-sm"><Link to="/login" >Back to login</Link></p>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword