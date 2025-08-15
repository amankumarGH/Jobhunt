import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/pages/Navbar";
import { setAuthUser, setLoading } from "@/redux/authSlice.js";
import { USER_END_POINT } from "@/utils/constant.js";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

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
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_END_POINT}/login`, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        dispatch(setAuthUser(res.data));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
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
                  value="Student"
                  checked={loginData.role === "Student"}
                  onChange={handleLoginData}
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="role"
                  id="recruiter"
                  value="Recruiter"
                  checked={loginData.role === "Recruiter"}
                  onChange={handleLoginData}
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button>
              <Loader2 className="h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button type="submit" className="w-full font-bold text-md py-5">
              Submit
            </Button>
          )}
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
    </>
  );
};

export default Login;
