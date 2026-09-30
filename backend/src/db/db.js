// we just connect the server with the database we have to export the db file in the server only 
// we connect the db with the server

const mongoose = require("mongoose")

async function connectDB(){

  await mongoose.connect(process.env.MONGO_URI);
  console.log("connected to DB")
}

module.exports = connectDB