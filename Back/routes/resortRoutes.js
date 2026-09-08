const express = require("express");

const {
  createResort,
  getAllResorts,
  updateResort,
  deleteResort,
} = require("../controllers/resortController");

const router = express.Router();

router.get("/", getAllResorts);
router.post("/", createResort);
router.put("/:id", updateResort);
router.delete("/:id", deleteResort);

module.exports = router;