import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link, useNavigate } from 'react-router-dom';
import { USERS, INCORRECTLY_DATA } from '../common/constants';


const SignInPage = () => {
  const navigate = useNavigate();
  const [isErrorMessage, setIsErrorMessage] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const inputHandler = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }


  const submitForm = (e) => {
    e.preventDefault()
    const isAccessGranted = !!USERS.filter(user => user.email === form.email && user.password === form.password).length
    if (isAccessGranted) {
      window.sessionStorage.setItem("access", true);
      setIsErrorMessage(false)
      setForm({
        email: '',
        password: ''
      })
      navigate('/dashboard')
    } else {
      setIsErrorMessage(true)
    }
  }


  return (
    <Card color="transparent" shadow={false} className='text-center mt-5 mb-10'>
      <Typography variant="h4" className='text-2xl'>
        Sign In
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 m-auto" onSubmit={submitForm}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            name="email"
            value={form.email}
            size="lg"
            placeholder="name@mail.com"
            className=" border-black focus:!border-t-gray-900 placeholder-gray-700  h-10"
            labelProps={{
              className: "before:content-none after:content-none"
            }}
            onChange={(e) => inputHandler(e)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            value={form.password}
            name="password"
            type="password"
            size="lg"
            placeholder="********"
            className=" border-black focus:!border-t-gray-900 placeholder-gray-700 h-10"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        {isErrorMessage && <p className=' text-red-600'>{INCORRECTLY_DATA}</p>}
        <Button className="mt-6 text-lg" type="submit" fullWidth>
          sign in
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          No account yet?{" "}
          <Link to='/'>
            <span className="font-medium text-blue-900 cursor-pointer underline">
              Sign Up
            </span>
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

export default SignInPage