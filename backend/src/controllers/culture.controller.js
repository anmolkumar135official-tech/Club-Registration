const CultureModel = require("../models/CultureRegistration.module");

// 👉 CREATE
async function CultureRegistration(req, res) {
  try {
    const newUser = await CultureModel.create(req.body);

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

// 👉 GET (with search filter)
async function getCultureRegistrations(req, res) {
  const { culture } = req.query;

  try {
    let query = {};

    // ✅ Apply filter
    if (culture) {
      query.selectedActivities = {
        $elemMatch: { $regex: culture, $options: "i" }
      };
    }

    const users = await CultureModel.find(query);

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

module.exports = { getCultureRegistrations, CultureRegistration };