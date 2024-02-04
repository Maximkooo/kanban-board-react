import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";


const LoginForm = () => {
  return (
    <Card color="transparent" shadow={false} className='text-center mt-5 mb-10'>
      <Typography variant="h4" className='text-2xl'>
        Sign Up
      </Typography>
      <Typography className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 m-auto">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="Enter your name"
            className=" border-black focus:!border-t-gray-900 placeholder-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" border-black focus:!border-t-gray-900 placeholder-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" border-black focus:!border-t-gray-900 placeholder-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6 text-lg" fullWidth>
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