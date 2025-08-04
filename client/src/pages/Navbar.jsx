import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut, User2 } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [logged, setlogged] = useState(false);

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

          {!logged ? (
            <div className="flex gap-3">
              <Link to="/login">
                <Button className="p-5" variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="p-5">SignUp</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild className="cursor-pointer">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-2 space-y-2">
                  <Avatar className="cursor-pointer mt-3">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Aman kumar</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae asperiores illum
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600 my-2">
                  <div className="flex items-center w-fit gap-2">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex items-center w-fit gap-2">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
