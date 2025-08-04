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
export const getAllJob = async (req, res) => {
  try {
    // const { userId } = req.body;

    // const jobFind = await Job({ createdBy: userId });

    const jobsFind = await Job.find().populate("company").populate("createdBy");

    if (!jobsFind) {
      return res.status(404).json({
        message: "Jobs not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "All jobs fetched successfully",
      success: true,
      jobsFind,
    });
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

    const searchJobId = await Job.findById(jobId)
      .populate("company")
      .populate("createdBy");

    if (!searchJobId) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({
      searchJobId,
      success: true,
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

    //we use popute just to print the all data of that schema/data
    //like populating the company means it will console all the values of the company otherwise only id will print
    const jobs = await Job.find({ createdBy: adminId })
      .populate("company")
      .populate("createdBy");

    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found.",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      success: false,
    });
  }
};
