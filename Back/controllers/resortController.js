const Resort = require("../models/Resort");

// Create Resort
const createResort = async (req, res) => {
  try {
    const resort = await Resort.create(req.body);

    res.status(201).json({
      success: true,
      data: resort,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Resorts
const getAllResorts = async (req, res) => {
  try {
    const resorts = await Resort.find();

    res.status(200).json({
      success: true,
      count: resorts.length,
      data: resorts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Resort
const updateResort = async (req, res) => {
  try {
    const resort = await Resort.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: resort,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Resort
const deleteResort = async (req, res) => {
  try {
    await Resort.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Resort deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createResort,
  getAllResorts,
  updateResort,
  deleteResort,
};