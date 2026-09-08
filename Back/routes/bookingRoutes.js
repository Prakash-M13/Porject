const express = require("express");
const router = express.Router();

const {
  createBooking,
  getAllBookings,
  getBookingsByPhone,
  updateBookingStatus,
} = require("../controllers/bookingController");

router.post("/", createBooking);

router.get("/", getAllBookings);

router.put("/:id/status", updateBookingStatus);

router.get(
  "/phone/:phone",
  getBookingsByPhone
);

router.put(
  "/:id/status",
  updateBookingStatus
);

module.exports = router;