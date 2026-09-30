
const express = require("express");
const router = express.Router();

const { CultureRegistration, getCultureRegistrations } = require("../controllers/culture.controller");

router.post("/", CultureRegistration);
router.get("/", getCultureRegistrations);

module.exports = router;