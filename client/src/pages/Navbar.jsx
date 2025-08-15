import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { setAuthUser, setLogout } from "@/redux/authSlice";
import { LogOut, User2 } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const userData = useSelector((state) => state.auth.authUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Try to restore user from localStorage on first mount
    const savedUser = localStorage.getItem("authUser");
    if (!userData && savedUser) {
      dispatch(setAuthUser(JSON.parse(savedUser)));
    }

    // If no user in state and no saved user → logout
    if (!userData && !savedUser) {
      dispatch(setLogout());
      navigate("/login");
    }
  }, [userData, dispatch, navigate]);

  // Save valid user data to localStorage
  useEffect(() => {
    if (userData) {
      localStorage.setItem("authUser", JSON.stringify(userData));
    }
  }, [userData]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setLogout());
    localStorage.removeItem("authUser");
    toast.success("Logout successful");
    navigate("/login");
  };

  return (
    <div className="shadow-md">
      <div className="py-7 max-w-7xl flex mx-auto">
        <div className="flex justify-between w-full items-center">
          <Link to="/" className="text-4xl font-bold ">
            JobPortal
          </Link>
          <div className="flex items-center gap-10">
            <ul className="flex gap-7 text-lg font-bold">
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jobs">Job</Link>
              </li>
              <li>
                <Link to="/browse">Browse</Link>
              </li>
            </ul>

            {!userData ? (
              <div className="flex gap-3">
                <Link to="/login">
                  <Button className="p-5" variant="outline">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="p-5 bg-[#7209b7]">SignUp</Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild className="cursor-pointer">
                  <Avatar>
                    <AvatarImage
                      src={
                        userData?.user?.profile?.profilePhoto ||
                        "https://github.com/shadcn.png"
                      }
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer mt-3">
                      <AvatarImage
                        src={
                          userData?.user?.profile?.profilePhoto ||
                          "https://github.com/shadcn.png"
                        }
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">
                        {userData?.user?.fullName}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {userData?.user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col text-gray-600 my-2">
                    <div className="flex items-center w-fit gap-2">
                      <User2 />
                      <Link to="/profile">
                        <Button variant="link">View Profile</Button>
                      </Link>
                    </div>
                    <div className="flex items-center w-fit gap-2">
                      <LogOut />
                      <Button variant="link" onClick={handleLogout}>
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
