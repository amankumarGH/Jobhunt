import { Job } from "../models/job.models.js";

//admin will post
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;

    const createdBy = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const jobData = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experience,
      position,
      company: companyId,
      createdBy,
    });

    return res.status(200).json({
      message: "New job created successfully.",
      jobData,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      success: false,
    });
  }
};

// student will get job
export const getJob = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: error,
      success: false,
    });
  }
};

//student
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({
      job,
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      success: false,
    });
  }
};

export const getAdminJob = async (req, res) => {
  try {
    const adminId = req.id;

    
  } catch (error) {
    return res.status(500).json({
      message: error,
      success: false,
    });
  }
};
