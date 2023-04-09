import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/input/Input'
import { AuthLayout } from '../../components/layouts/AuthLayout'

function Register() {
  return (
    <AuthLayout heading="Create your account" statement="Welcome to the team! Enter your details">

    <form className=' tw-w-full'>
        <Input type="text" label="Full name" placeholder="e.g Jane Doe" />
        <Input type="text" label="Username" placeholder="e.g jane_d03" />
        <Input type="email" label="Email address" placeholder="e.g youremail@domain.com" />
        <Input type="password" label="Password" placeholder="Strong unique password" />
        <Input type="password" label="Confirm password" placeholder="Repeat your password" />
        <input type="submit" className=' tw-bg-accent-primary tw-w-full tw-py-2 tw-mt-6 tw-rounded-lg tw-font-medium tw-transition-all tw-duration-200 hover:tw-bg-accent-green hover:tw-scale-95 hover:tw-text-white' value='Log in'/>
    </form>
    <span className='tw-flex tw-gap-2 tw-text-sm tw-mt-8'>
        <p className=' tw-text-accent-gray'>Already have an account?</p>
        <Link to="/login" className=' tw-text-accent-orange hover:tw-underline'>Log in account</Link>
    </span>
</AuthLayout>
  )
}

export default Register