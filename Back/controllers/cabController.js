const Cab = require("../models/Cab");

// Create
const createCab = async (req, res) => {
  try {
    const cab = await Cab.create(req.body);

    res.status(201).json({
      success: true,
      data: cab,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Read
const getAllCabs = async (req, res) => {
  try {
    const cabs = await Cab.find();

    res.status(200).json({
      success: true,
      count: cabs.length,
      data: cabs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update
const updateCab = async (req, res) => {
  try {
    const cab = await Cab.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: cab,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete
const deleteCab = async (req, res) => {
  try {
    await Cab.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Cab deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCab,
  getAllCabs,
  updateCab,
  deleteCab,
};