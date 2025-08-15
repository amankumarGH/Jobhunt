import React from "react";
import LatestJobCards from "./LatestJobCards.jsx";

const LatestJobs = () => {
  const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-extrabold text-center">
        <span className="text-blue-700">Latest & Top </span>Job Openings
      </h1>
      <div className="grid grid-cols-3 my-12 gap-4 justify-center">
        {randomJobs.slice(0, 6).map((item, idx) => (
          <LatestJobCards key={idx} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
