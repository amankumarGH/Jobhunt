import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const JobDescription = () => {
  const isApplied = true;

  return (
    <div className="max-w-5xl mx-auto my-10 flex flex-col gap-5">
      {/* upper */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">company name</h1>
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
        <Button
          className={` ${
            isApplied ? "bg-gray-600 cursor-not-allowed" : "bg-[#7209b7]"
          } `}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      {/* lower */}
      <h1 className="border-b-2 py-4 font-semibold">Job Descrition</h1>
      <div className="flex flex-col justify-center">
        <h1 className="text-md font-bold">
          Role:{" "}
          <span className="text-md font-normal text-gray-700 pl-4">
            Frontend-developer
          </span>
        </h1>
        <h1 className="text-md font-bold">
          Location:{" "}
          <span className="text-md font-normal text-gray-700 pl-4">
            Frontend-developer
          </span>
        </h1>
        <h1 className="text-md font-bold">
          Description:{" "}
          <span className="text-md font-normal text-gray-700 pl-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum
            quaerat soluta odio quia mollitia?
          </span>
        </h1>
        <h1 className="text-md font-bold">
          Experience:{" "}
          <span className="text-md font-normal text-gray-700 pl-4">2</span>
        </h1>
        <h1 className="text-md font-bold">
          Salary:{" "}
          <span className="text-md font-normal text-gray-700 pl-4">150000</span>
        </h1>
        <h1 className="text-md font-bold">
          Toatal Applicants:{" "}
          <span className="text-md font-normal text-gray-700 pl-4">5</span>
        </h1>
        <h1 className="text-md font-bold">
          Posted Date:{" "}
          <span className="text-md font-normal text-gray-700 pl-4">
            2025-08-13
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
