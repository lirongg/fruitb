const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();


const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.listen(port, function () {
  console.log(`Express app is running on port ${port}`);
});

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
