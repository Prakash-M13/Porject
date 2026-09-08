const mongoose = require("mongoose");

const cabSchema = new mongoose.Schema(
  {
    vehicleName: {
      type: String,
      required: true,
    },

    vehicleType: {
      type: String,
      required: true,
    },

    pricePerKm: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cab", cabSchema);