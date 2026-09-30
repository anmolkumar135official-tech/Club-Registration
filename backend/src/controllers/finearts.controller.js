const FineArtsModel = require("../models/FineArtsRegistration.module");

// 👉 CREATE
async function FineArtsRegistration(req, res) {
  try {
    const newUser = await FineArtsModel.create(req.body);

    res.status(201).json({
      success: true,
      message: "FineArts registration successful",
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
async function getFineArtsRegistrations(req, res) {
  const { mediums } = req.query;

  try {
    let query = {};

   
    if (mediums) {
      query.mediums = { $regex: mediums, $options: "i" };
    }

    const users = await FineArtsModel.find(query);

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

module.exports = { getFineArtsRegistrations, FineArtsRegistration };