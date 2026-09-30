const express = require('express');
const cors = require("cors");

const sportrouters = require("./routes/sport.routes");
const cultureRoutes = require("./routes/culture.routes");
const academicRouters = require("./routes/academic.routes")
const fineartsRoutes = require("./routes/FineArts.routes")


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/sport-registration", sportrouters);
app.use("/culture-registration", cultureRoutes);
app.use("/academic-registration",academicRouters)
app.use("/finearts-registration", fineartsRoutes)



module.exports = app