const express = require("express");
const router = express.Router();

const {
  SportRegistration,
  getSportRegistrations
} = require("../controllers/sport.controller");

// POST
router.post("/", SportRegistration);

// GET
router.get("/", getSportRegistrations);

module.exports = router;





