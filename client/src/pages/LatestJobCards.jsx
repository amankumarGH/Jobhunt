import { Badge } from "@/components/ui/badge";
import React from "react";

const LatestJobCards = () => {
  return (
    <div className="shadow-lg p-5 rounded-md border bg-white border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">company name</h1>
        <p className="text-sm text-gray-500">india</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">job title </h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex gap-2 items-center mt-4">
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
    </div>
  );
};

export default LatestJobCards;
