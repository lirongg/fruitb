const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const fruitRoutes = require('./routes/fruitRoutes')
const orderRoutes = require('./routes/orderRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/fruits', fruitRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

app.listen(port, function () {
  console.log(`Express app is running on port ${port}`);
});

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
