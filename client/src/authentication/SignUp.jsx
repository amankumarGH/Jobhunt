import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role:"",
    file: "",
  });

  const handleSignupData = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };
  const handleFileData = (e) => {
    setSignupData({ ...signupData, file: e.target.files?.[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupData);
  };

  return (
    <div className="w-[45%] border-2 p-5 mx-auto rounded-md mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">SignUp</h1>
        <div>
          <Label htmlFor="fullname">FullName</Label>
          <Input
            type="fullname"
            id="fullname"
            placeholder="Enter Your FullName"
            className="py-4"
            name="fullname"
            value={signupData.fullname}
            onChange={handleSignupData}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="py-4"
            name="email"
            value={signupData.email}
            onChange={handleSignupData}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="text"
            id="phone"
            placeholder="Enter Your Phone Number"
            className="py-4"
            name="phoneNumber"
            value={signupData.phoneNumber}
            onChange={handleSignupData}
          />
        </div>
        <div>
          <Label htmlFor="pswd">Password</Label>
          <Input
            type="Password"
            id="pswd"
            placeholder="Enter Your Password"
            className="py-4"
            name="password"
            value={signupData.password}
            onChange={handleSignupData}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <RadioGroup className="flex gap-4 text-md">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="role"
                  id="student"
                  value="student"
                  checked={signupData.role === "student"}
                  onChange={handleSignupData}
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="role"
                  id="recruiter"
                  value="recruiter"
                  checked={signupData.role === "recruiter"}
                  onChange={handleSignupData}
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex w-full max-w-sm items-center gap-2">
            <Label htmlFor="picture" className="font-semibold">
              Profile
            </Label>
            <Input
              id="picture"
              accept="image/*"
              type="file"
              className=" file:text-black file:font-bold py-2 cursor-pointer"
              onChange={handleFileData}
            />
          </div>
        </div>
        <Button type="submit" className="w-full font-bold text-md py-5">
          Submit
        </Button>
      </form>
      <div className="flex gap-4 mt-6 flex-col">
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
