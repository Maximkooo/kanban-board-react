import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link, useNavigate } from 'react-router-dom';
import { isEmail, isStrongPassword, isAlpha } from 'validator';
import { USERS } from '../common/constants';
import { v4 as uuidv4 } from 'uuid'

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isErrorMessage, setIsErrorMessage] = useState('')
  const [form, setForm] = useState({
    name: { value: '', valid: false, error: 'Name must contain only letters*' },
    email: { value: '', valid: false, error: 'Incorrect email' },
    password: { value: '', valid: false, error: 'Make up a complex password*' },
  })

  window.sessionStorage.setItem("access", false);

  const inputHandler = (e) => {
    let isValid = false
    switch (e.target.name) {
      case 'name':
        isValid = isAlpha(e.target.value)
        break;
      case 'email':
        isValid = isEmail(e.target.value)
        break;
      case 'password':
        isValid = isStrongPassword(e.target.value)
        break;
    }
    // console.log(isValid);
    requiredInputHandler(e.target.name, e.target.value, isValid, form[e.target.name].error)
  }

  const requiredInputHandler = (key, value, valid, error) => {
    setForm(prev => ({
      ...prev,
      [key]: { value, valid, error }
    }))
  }

  const submitForm = (e) => {
    e.preventDefault()
    const isEveryValid = Object.keys(form).map(key => form[key].valid).every(el => el)

    if (isEveryValid) {
      USERS.push({
        id: uuidv4(),
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
      navigate('/sign-in')
    }
    else {
      setIsErrorMessage(Object.keys(form).map(key => form[key]).find(el => !el.valid).error)
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
            value={form.name.value}
            size="lg"
            placeholder="Enter your name"
            className=" border-black focus:!border-t-gray-900 placeholder-gray-700 height__input"
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
            value={form.email.value}
            size="lg"
            placeholder="name@mail.com"
            className=" border-black focus:!border-t-gray-900 placeholder-gray-700 height__input"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => inputHandler(e)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            value={form.password.value}
            name="password"
            type="password"
            size="lg"
            placeholder="********"
            className=" border-black focus:!border-t-gray-900 placeholder-gray-700 height__input"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        {isErrorMessage && <p className=' text-red-600'>{isErrorMessage}</p>}
        <Button className="mt-6 text-lg" type="submit" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to='/sign-in'>
            <span className="font-medium text-blue-900 cursor-pointer underline">
              Sign In
            </span>
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

export default SignUpPage