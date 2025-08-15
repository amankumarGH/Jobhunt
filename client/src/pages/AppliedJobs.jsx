import { Badge } from "@/components/ui/badge";
import React from "react";

const appliedJob = [1, 2, 5];

const AppliedJobs = () => {
  return (
    <div>
      {appliedJob.length === 0 ? (
        <span>Not apply</span>
      ) : (
        <div className="rounded-lg border-2 shadow-lg">
          <div className="grid grid-cols-4 py-4 justify-items-center border-b-4 font-semibold text-md">
            <div>Date</div>
            <div>Job Role</div>
            <div>Company</div>
            <div>Status</div>
          </div>

          <div>
            {appliedJob.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 py-4 justify-items-center text-lg"
              >
                <div>2024-05-02</div>
                <div>Frontend developer</div>
                <div>Microsoft</div>
                <Badge className="px-3 text-sm rounded-full bg-[#7209b7]">Pending...</Badge>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
