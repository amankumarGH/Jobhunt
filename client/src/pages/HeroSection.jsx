import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex items-center flex-col gap-8 mt-14 ">
        <p className="bg-gray-200 rounded-full px-7 py-2 text-[#F83002] font-medium text-center">
          No. 1 Job Hunt Website
        </p>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br />
          Get Your <span className="text-blue-600">Dream Jobs</span>
        </h1>
        <p className="w-[40%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          deserunt repudiandae doloremque? Excepturi architecto, nam mollitia
          animi minima ratione dolorum.
        </p>

        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-5 rounded-full items-center gap-5 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full bg-[#6A38C2]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
