const AcademicModel = require("../models/AcademicRegistration.module");

// 👉 CREATE
async function AcademicRegistration(req, res) {
  try {
    const newUser = await AcademicModel.create(req.body);

    res.status(201).json({
      success: true,
      message: "registration successful",
      data: newUser
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

// 👉 GET (with filter)
async function getAcademicRegistrations(req, res) {
  const { track } = req.query;

  try {
    let query = {};

    
    if (track) {
      query.tracks = {
        $elemMatch: { $regex: track, $options: "i" }
      };
    }

    const users = await AcademicModel.find(query);

    res.json({
      success: true,
      data: users
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

module.exports = { getAcademicRegistrations, AcademicRegistration };