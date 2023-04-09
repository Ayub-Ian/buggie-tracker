import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/input/Input'
import { AuthLayout } from '../../components/layouts/AuthLayout'

function Login() {
  return (
    <AuthLayout heading="Log in to your account" statement="Welcome back! Enter your credentials">

        <form className=' tw-w-full'>
            <Input type="text" label="Login id" placeholder="Email or username" />
            <Input type="password" label="Password" placeholder="Password" />
            <div className='tw-mt-1 tw-float-right'>
                <Link to="/forgot_password" className=' tw-text-sm tw-text-accent-orange '> Forgot password?</Link>
            </div>
            <input type="submit" className=' tw-bg-accent-primary tw-w-full tw-py-2 tw-mt-6 tw-rounded-lg tw-font-medium tw-transition-all tw-duration-200 hover:tw-bg-accent-green hover:tw-scale-95 hover:tw-text-white' value='Log in'/>
        </form>
        <span className='tw-flex tw-gap-2 tw-text-sm tw-mt-8'>
            <p className=' tw-text-accent-gray'>Don't have an account?</p>
            <Link to="/register" className=' tw-text-accent-orange hover:tw-underline'>Create an account</Link>
        </span>
    </AuthLayout>
  )
}

export default Login