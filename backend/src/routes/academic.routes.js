const express = require("express");
const {AcademicRegistration, getAcademicRegistrations} = require("../controllers/academic.controller");

const router = express.Router();

router.post("/", AcademicRegistration)

// GET
router.get("/", getAcademicRegistrations);



module.exports = router;