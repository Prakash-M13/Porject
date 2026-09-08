const Camping = require("../models/Camping");

// Add Camping Package
const createCamping = async (req, res) => {
  try {
    const camping = await Camping.create(req.body);

    res.status(201).json({
      success: true,
      data: camping,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Camping
const updateCamping = async (req, res) => {
  try {
    const camping = await Camping.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      data: camping,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Camping
const deleteCamping = async (req, res) => {
  try {
    await Camping.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Camping deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Camping Packages
const getAllCampings = async (req, res) => {
  try {
    const campings = await Camping.find();

    res.status(200).json({
      success: true,
      count: campings.length,
      data: campings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCamping,
  getAllCampings,
  updateCamping,
  deleteCamping,
};