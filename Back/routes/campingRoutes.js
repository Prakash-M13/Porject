const express = require("express");

const {
  createCamping,
  getAllCampings,
  updateCamping,
  deleteCamping,
} = require("../controllers/campingController");

const router = express.Router();

router.get("/", getAllCampings);

router.post("/", createCamping);

router.put("/:id", updateCamping);

router.delete("/:id", deleteCamping);

module.exports = router;