import { Job } from "../models/job.models.js";

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

export const getJob = async (req, res) => {
  try {

      

  } catch (error) {
    return res.status(500).json({
      message: error,
      success: false,
    });
  }
};
