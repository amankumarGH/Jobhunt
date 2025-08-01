import { Company } from "../models/Company.models.js";
import { User } from "../models/user.models.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    const userId = req.id;

    const userData = await User.findOne({ _id: userId });

    if (!userData || userData.role !== "Recruiter") {
      return res.status(401).json({
        message: "You are not allowed to register",
        success: false,
      });
    }

    if (!companyName) {
      return res.status(401).json({
        message: "Company Name is required!",
        success: false,
      });
    }

    let company = await Company.findOne({ companyName: companyName.trim() });

    if (company) {
      return res.status(400).json({
        message: "You can't register same company",
        success: false,
      });
    }
    company = await Company.create({
      companyName: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company register successfully!",
      company,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server error",
      success: false,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id; //logged in user id

    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(400).json({
        message: "Companies is not found",
        success: false,
      });
    }

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server error",
      success: false,
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;

    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        message: "Companies not found",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server error",
      success: false,
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const companyId = req.params.id;

    const { companyName, description, website, location } = req.body;

    // const file = req.file;

    const updateCompanyData = { companyName, description, website, location };

    const company = await Company.findByIdAndUpdate(
      companyId,
      updateCompanyData,
      { new: true }
    );

    if (!company) {
      return res.status(404).json({
        message: "Companies not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information update...",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server error",
      success: false,
    });
  }
};
