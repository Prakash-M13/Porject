const express = require("express");
const {
  createTour,
    getAllTours,
    updateTour,
    deleteTour
} = require("../controllers/tourController");

const router = express.Router();
router.get("/test", (req, res) => {
  res.send("Tour route working");
});
router.get("/", getAllTours);
router.post("/", createTour);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);

module.exports = router;