// we just connect the server with the database we have to export the db file in the server only 
// we connect the db with the server

const mongoose = require("mongoose")

async function connectDB(){

  await mongoose.connect("mongodb://rbu:3JBus2p1h9NjPLgQ@ac-fdw7oqn-shard-00-00.htxbvou.mongodb.net:27017,ac-fdw7oqn-shard-00-01.htxbvou.mongodb.net:27017,ac-fdw7oqn-shard-00-02.htxbvou.mongodb.net:27017/?ssl=true&replicaSet=atlas-h5tzqc-shard-0&authSource=admin&appName=rbu-backend");
  
  console.log("connected to DB")
}

module.exports = connectDB