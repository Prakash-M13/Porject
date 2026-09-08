const express = require("express");

const {
  createCab,
  getAllCabs,
  updateCab,
  deleteCab,
} = require("../controllers/cabController");

const router = express.Router();

router.get("/", getAllCabs);
router.post("/", createCab);
router.put("/:id", updateCab);
router.delete("/:id", deleteCab);

module.exports = router;