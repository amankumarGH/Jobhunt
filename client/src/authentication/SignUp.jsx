import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { USER_END_POINT } from "@/utils/constant";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import Navbar from "@/pages/Navbar";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
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
    // console.log(signupData);
    try {
      dispatch(setLoading(true));
      const formData = new FormData();
      formData.append("fullName", signupData.fullName);
      formData.append("email", signupData.email);
      formData.append("password", signupData.password);
      formData.append("phoneNumber", signupData.phoneNumber);
      formData.append("role", signupData.role);
      formData.append("file", signupData.file); // file upload

      const res = await axios.post(`${USER_END_POINT}/signup`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file upload
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-[45%] border-2 p-5 mx-auto rounded-md mt-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl">SignUp</h1>
          <div>
            <Label htmlFor="fullname">FullName</Label>
            <Input
              type="text"
              id="fullname"
              placeholder="Enter Your FullName"
              className="py-4"
              name="fullName"
              value={signupData.fullName}
              onChange={handleSignupData}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
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
              type="password"
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
                    value="Student"
                    checked={signupData.role === "Student"}
                    onChange={handleSignupData}
                  />
                  <Label htmlFor="student">Student</Label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="role"
                    id="recruiter"
                    value="Recruiter"
                    checked={signupData.role === "Recruiter"}
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
                name="file"
                className=" file:text-black file:font-bold py-2 cursor-pointer"
                onChange={handleFileData}
              />
            </div>
          </div>
          {loading ? (
            <Button>
              <Loader2 className="animate-spin h-4 m-4" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full font-bold text-md py-5">
              Submit
            </Button>
          )}
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
    </>
  );
};

export default SignUp;
