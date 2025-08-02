import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-[45%] border-2 p-5 mx-auto rounded-md mt-8">
      <form action="" className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">Login</h1>
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
          <Label htmlFor="pswd">Password</Label>
          <Input
            type="password"
            id="pswd"
            placeholder="Enter the Password"
            className="py-4"
            name=""
          />
        </div>
        <div className="flex gap-4 text-md">
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="student" />
            <Label htmlFor="student">Student</Label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="recruiter" />
            <Label htmlFor="recruiter">Recruiter</Label>
          </div>
        </div>
      </form>
      <div className="flex gap-4 mt-6 flex-col">
        <Button className="w-full font-bold text-md py-5">Submit</Button>
        <p>
          Don't have an account?{" "}
          <Link className="text-blue-600 font-bold" to="/signup">
            Signup
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
