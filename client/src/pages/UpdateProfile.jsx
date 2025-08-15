import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setAuthUser } from "@/redux/authSlice";
import { USER_END_POINT } from "@/utils/constant";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const UpdateProfile = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.authUser);


  const [updateData, setUpdateData] = useState({
    fullName: userData.user?.fullName,
    email: userData.user?.email,
    phoneNumber: userData.user?.phoneNumber,
    bio: userData.user?.profile?.bio,
    skills: userData.user?.profile?.skills?.map((skill) => skill),
    file: userData.user?.profile?.resume,
  });

  const handleUpdateData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleResume = (e) => {
    setUpdateData({ ...updateData, file: e.target.files?.[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", updateData.fullName);
    formData.append("email", updateData.email);
    formData.append("phoneNumber", updateData.phoneNumber);
    formData.append("bio", updateData.bio);
    formData.append("skills", updateData.skills);

    if (updateData.file) {
      formData.append("file", updateData.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file upload
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        console.log(res.data.userData);

        // Keep existing structure, only replace user details
        dispatch(
          setAuthUser({
            ...userData, // keep token or other properties
            user: res.data.userData, // replace only the user object
          })
        );

        // also update localStorage so it persists after refresh
        localStorage.setItem(
          "authUser",
          JSON.stringify({
            ...userData,
            user: res.data.userData,
          })
        );

        toast.success(res.data.message);
      }
    } catch (e) {
      console.log(e);
      toast.error(e?.response?.data?.message);
    } finally {
      setLoading(false);
      setOpen(false);
      // setUpdateData("");
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader className="px-8">
            <DialogTitle>Update Profile</DialogTitle>

            <form onSubmit={handleSubmit} className="py-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2 items-start">
                <Label className="font-semibold" htmlFor="fullName">
                  Name
                </Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={updateData.fullName}
                  onChange={handleUpdateData}
                />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <Label className="font-semibold">Email</Label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleUpdateData}
                  value={updateData.email}
                />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <Label className="font-semibold" htmlFor="number">
                  Phone Number
                </Label>
                <Input
                  type="text"
                  id="number"
                  name="phoneNumber"
                  onChange={handleUpdateData}
                  value={updateData.phoneNumber}
                />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <Label className="font-semibold" htmlFor="bio">
                  Bio
                </Label>
                <Input
                  type="text"
                  id="bio"
                  name="bio"
                  onChange={handleUpdateData}
                  value={updateData.bio}
                />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <Label className="font-semibold" htmlFor="skills">
                  Skills
                </Label>
                <Input
                  type="text"
                  id="skills"
                  name="skills"
                  onChange={handleUpdateData}
                  value={updateData.skills}
                />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <Label className="font-semibold" htmlFor="file">
                  Resume
                </Label>
                <Input
                  type="file"
                  name="file"
                  id="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResume}
                />
              </div>
              <DialogFooter>
                {loading ? (
                  <Button>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button type="submit" className="w-full">
                    Update
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfile;
