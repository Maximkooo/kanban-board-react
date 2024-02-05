import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

import { useNavigate } from 'react-router-dom';
import { isEmpty, isEmail, isStrongPassword } from 'validator';

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: { value: '', valid: false },
    email: { value: '', valid: false },
    password: { value: '', valid: false },
  })

  const inputHandler = (e) => {
    let isValid = false
    switch (e.target.name) {
      case 'name':
        isValid = !isEmpty(e.target.value)
        break;
      case 'email':
        isValid = isEmail(e.target.value)
        break;
      case 'password':
        isValid = isStrongPassword(e.target.value)
        break;
    }
    requiredInputHandler(e.target.name, e.target.value, isValid)
  }

  const requiredInputHandler = (key, value, valid) => {
    setForm(prev => ({
      ...prev,
      [key]: { value, valid }
    }))
  }

  const submitForm = (e) => {
    e.preventDefault()

    const isEveryValid = Object.keys(form).map(key => form[key].valid).every(el => el)
    console.log(isEveryValid);
    if (isEveryValid) {
      navigate('/')
    }

  }


  return (
    <Card color="transparent" shadow={false} className='text-center mt-5 mb-10'>
      <Typography variant="h4" className='text-2xl'>
        Sign Up
      </Typography>
      <Typography className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 m-auto" onSubmit={submitForm}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            name="name"
            size="lg"
            placeholder="Enter your name"
            className=" border-black focus:!border-t-gray-900 placeholder-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => inputHandler(e)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            name="email"
            size="lg"
            placeholder="name@mail.com"
            className=" border-black focus:!border-t-gray-900 placeholder-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => inputHandler(e)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            name="password"
            type="password"
            size="lg"
            placeholder="********"
            className=" border-black focus:!border-t-gray-900 placeholder-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <Button className="mt-6 text-lg" type="submit" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <span className="font-medium text-blue-900 cursor-pointer underline">
            Sign In
          </span>
        </Typography>
      </form>
    </Card>
  );
}

export default LoginForm