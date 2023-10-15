const express = require("express");
const app = express();
const route = require("./route");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017")
    .then(() => console.log("DB connected..."))
    .catch(() => console.log("Connection failed!"));

app.use(express.json(), route);

app.listen(3000, () => console.log("Server running..."));