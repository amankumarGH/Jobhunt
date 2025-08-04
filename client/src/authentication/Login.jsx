import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleLoginData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <div className="w-[45%] border-2 p-5 mx-auto rounded-md mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">Login</h1>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="py-4"
            name="email"
            value={loginData.email}
            onChange={handleLoginData}
          />
        </div>
        <div>
          <Label htmlFor="pswd">Password</Label>
          <Input
            type="password"
            id="pswd"
            placeholder="Enter the Password"
            className="py-4"
            name="password"
            value={loginData.password}
            onChange={handleLoginData}
          />
        </div>
        <div className="flex gap-4 text-md">
          <RadioGroup className="flex gap-4 text-md">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="role"
                id="student"
                value="student"
                checked={loginData.role === "student"}
                onChange={handleLoginData}
              />
              <Label htmlFor="student">Student</Label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="role"
                id="recruiter"
                value="recruiter"
                checked={loginData.role === "recruiter"}
                onChange={handleLoginData}
              />
              <Label htmlFor="recruiter">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        <Button type="submit" className="w-full font-bold text-md py-5">
          Submit
        </Button>
      </form>
      <div className="flex gap-4 mt-6 flex-col">
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
