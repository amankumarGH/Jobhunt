import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div className="shadow-xl py-4 bg-white px-5 border-2 flex flex-col gap-2 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">2 days</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button className="p-1" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="../assets/react.svg" />
          </Avatar>
        </Button>
        <div className="">
          <h1 className="font-medium text-lg">company name</h1>
          <p className="text-gray-600 text-sm">country name</p>
        </div>
      </div>
      <h1 className="font-bold text-lg">Title</h1>
      <p className="text-gray-600 text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quia
        quidem nisi at recusandae perferendis consequatur sunt,
      </p>
      <div className="flex gap-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          12 Position
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          part time
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          24 lpa
        </Badge>
      </div>
      <div className="flex gap-4 mt-4 items-center">
        <Link to="/description/1">
          <Button variant="outline">Details</Button>
        </Link>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
};

export default JobCard;
