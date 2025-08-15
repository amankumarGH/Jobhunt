import React from "react";
import Navbar from "./Navbar";
import JobCard from "./JobCard";
import FilterJob from "./FilterJob";
import Footer from "./Footer";

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-12 pb-16 ">
        {/* filter job left*/}
        <div className="flex gap-4">
          <div className="w-[20%] shadow-lg border-2 rounded-md px-4 h-[88vh] overflow-y-auto pb-5">
            <FilterJob />
          </div>

          {/* job card right*/}

          {jobArray.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-5">
                {jobArray.map((item, idx) => (
                  <div key={idx}>
                    <JobCard />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Jobs;
