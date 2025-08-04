import { Application } from "../models/application.models.js";
import { Job } from "../models/job.models.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;

    //both are same things
    const { id: jobId } = req.params;
    //     const jobId = req.params.id;

    if (!jobId) {
      return res.status(403).json({
        message: "Job is missing",
        success: false,
      });
    }

    const applicationExisting = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (applicationExisting) {
      return res.status(403).json({
        message: "You have alreay applied.",
        success: false,
      });
    }

    //check jobs exist in the db or not
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(403).json({
        message: "Job is not found.",
        success: false,
      });
    }

    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.Applications.push(newApplication._id);

    await job.save();
    return res.status(200).json({
      message: "Job Applied successfull.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server error",
      success: false,
    });
  }
};

export const getAppliedJob = async (req, res) => {
  try {
    const userId = req.id;

    const applications = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        populate: { path: "company" },
      });

    if (!application) {
      return res.status(403).json({
        message: "Not applied for any Jobs",
        success: false,
      });
    }

    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server error",
      success: false,
    });
  }
};

//admin will see how many users have applied
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.find(jobId);

    if (!job) {
      return res.status(403).json({
        message: "Not applicants is applied",
        success: false,
      });
    }

    return res.status(200).json({
      message: "All applicants",
      job,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server error",
      success: false,
    });
  }
};
