import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-7 w-[90%] flex mx-auto">
      <div className="flex justify-between w-full items-center">
        <Link to="/" className="text-4xl font-bold ">
          JobPortal
        </Link>
        <div className="flex items-center gap-10">
          <ul className="flex gap-7 text-lg font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Job</Link>
            </li>
            <li>
              <Link>Browser</Link>
            </li>
          </ul>

          <Popover >
            <PopoverTrigger asChild className="cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <h1>hello</h1>
            </PopoverContent>
          </Popover>

          <div className="flex gap-3">
            <Link to="/login">
              <Button className="p-5">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="p-5">SignUp</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
