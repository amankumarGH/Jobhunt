import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import { Contact2, MailIcon, PenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppliedJobs from "./AppliedJobs";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const userData = useSelector((state) => state.auth.authUser);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow w-full py-16">
        {/* upper */}
        <div className="max-w-4xl rounded-lg border-2 shadow-lg py-5 px-9 mx-auto flex flex-col gap-4">
          {/* image and pen-icon */}
          <div className="flex justify-between">
            <div className="flex gap-6 items-center">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src={
                    userData?.user?.profile?.profilePhoto ||
                    "https://github.com/shadcn.png"
                  }
                ></AvatarImage>
              </Avatar>
              <div className="pr-4">
                <h1 className="font-bold text-2xl">
                  {userData?.user?.fullName}
                </h1>
                <p className="text-md text-gray-800">
                  {userData?.user?.profile?.bio}
                </p>
              </div>
            </div>
            <Button
              className="p-5 border-2 border-black"
              variant="outline"
              onClick={() => setOpen(!open)}
            >
              <PenIcon />
            </Button>
          </div>

          {/* contact detail */}
          <div className="flex flex-col gap-2 text-md  text-gray-700">
            <div className="flex gap-3 items-center">
              <MailIcon />
              <span className="">{userData?.user?.email}</span>
            </div>
            <div className="flex gap-3 items-center">
              <Contact2 />
              <span className="">{userData?.user?.phoneNumber}</span>
            </div>
          </div>

          {/* skills */}
          <div>
            <h1 className="font-bold text-lg">Skills</h1>
            <div className="flex flex-wrap gap-2 mt-1 max-h-[7.5rem] overflow-y-auto">
              {userData?.user?.profile?.skills?.length === 0 ? (
                <span className="text-gray-500">No skills added</span>
              ) : (
                userData?.user?.profile?.skills?.map((item, idx) => (
                  <Badge
                    key={idx}
                    className="px-3 rounded-full border-2 border-black"
                    variant="outline"
                  >
                    {item}
                  </Badge>
                ))
              )}
            </div>
          </div>

          {/* resume */}
          <div>
            <h1 className="font-bold text-lg">Resume</h1>
            <div>
              {!userData?.user?.profile?.resumeOriginalName ? (
                <span className="text-gray-500">Add your resume</span>
              ) : (
                <span>{userData?.user?.profile?.resumeOriginalName}</span>
              )}
            </div>
          </div>
        </div>

        {/* lower */}
        <div className="max-w-4xl py-8 px-7 font-bold text-xl mx-auto flex flex-col gap-4">
          <h1>Applied Jobs</h1>
        </div>

        <div className="max-w-4xl  mx-auto flex flex-col gap-4">
          <AppliedJobs />
        </div>

        {/* update profile icon code */}
        <UpdateProfile open={open} setOpen={setOpen} />
      </div>
      <Footer className="fixed bottom-0 left-0 w-full mt-10" />
    </div>
  );
};

export default Profile;
