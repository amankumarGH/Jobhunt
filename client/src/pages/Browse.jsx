import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JobCard from "./JobCard";

const array = [1, 2, 3, 4, 5, 6, 9,12];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-xl font-bold my-10">
          Search Results ({array.length})
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {array.map((item, idx) => (
            <JobCard key={idx} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
