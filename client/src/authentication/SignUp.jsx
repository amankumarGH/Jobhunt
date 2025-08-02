import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-[45%] border-2 p-5 mx-auto rounded-md mt-8">
      <form action="" className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">SignUp</h1>
        <div>
          <Label htmlFor="fullname">FullName</Label>
          <Input
            type="fullname"
            id="fullname"
            placeholder="Enter Your FullName"
            className="py-4"
            name=""
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="py-4"
            name=""
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="text"
            id="phone"
            placeholder="Enter Your Phone Number"
            className="py-4"
            name=""
          />
        </div>
        <div>
          <Label htmlFor="pswd">Password</Label>
          <Input
            type="Password"
            id="pswd"
            placeholder="Enter Your Password"
            className="py-4"
            name=""
          />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-md">
              <input type="radio" name="" id="student" />
              <Label htmlFor="student">Student</Label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="" id="recruiter" />
              <Label htmlFor="recruiter">Recruiter</Label>
            </div>
          </div>
          <div className="flex w-full max-w-sm items-center gap-2">
            <Label htmlFor="picture" className="font-semibold">
              Profile
            </Label>
            <Input
              id="picture"
              type="file"
              className=" file:text-black file:font-bold py-2"
            />
          </div>
        </div>
      </form>
      <div className="flex gap-4 mt-6 flex-col">
        <Button className="w-full font-bold text-md py-5">Submit</Button>
        <p>
          Already have an account?{" "}
          <Link className="text-blue-600 font-bold" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
