const express = require("express");

const {FineArtsRegistration, getFineArtsRegistrations} = require("../controllers/finearts.controller");

const router = express.Router();

router.post("/",FineArtsRegistration);
router.get("/", getFineArtsRegistrations);

module.exports = router;


