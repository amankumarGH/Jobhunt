import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";

const filterData = [
  {
    filterType: "Location",
    filterTypeValue: ["Delhi", "Mumbai", "Bengaluru", "Kolkata", "Chennai"],
  },
  {
    filterType: "Industry",
    filterTypeValue: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Mobile App Development",
      "Data Science",
      "Machine Learning / AI",
      "Cloud Computing",
      "Cybersecurity",
      "DevOps",
      "UI/UX Design",
    ],
  },
  {
    filterType: "Salary",
    filterTypeValue: ["50k", "158k", "170k", "1000k"],
  },
];

const FilterJob = () => {
  return (
    <div className="">
      <h1 className="text-xl font-extrabold py-3 border-b-2">Filter Jobs</h1>

      <RadioGroup className="mt-2 flex flex-col gap-3 ">
        {filterData.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1 items-start">
            <h1 className="font-bold text-xl">{item.filterType}</h1>

            {item.filterTypeValue.map((val, indx) => (
              <div key={indx} className="flex gap-3 items-center">
                <RadioGroupItem value={val} id={val} className="scale-110" />
                <Label htmlFor={val} className="text-sm">
                  {val}
                </Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterJob;
