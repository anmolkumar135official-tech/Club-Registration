const userModel = require("../models/SportRegistration.module");

// CREATE
async function SportRegistration(req, res) {
  try {
    const newUser = await userModel.create(req.body);

    res.status(201).json({
      success: true,
      message: "Sport registration successful",
      data: newUser
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

// GET (with filter)
async function getSportRegistrations(req, res) {
  const { sport } = req.query;

  try {
    let query = {};

    if (sport) {
      query.selectedSports = { $regex: sport, $options: "i" };
    }

    const users = await userModel.find(query);

    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false });
  }
}

module.exports = { SportRegistration, getSportRegistrations };