const express = require("express");
const mongoose = require("mongoose");
const path = require('path');


const PORT = process.env.PORT || 3000

const db = require("./models")

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//mongoose database.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// when connected to the database console.log(established).
mongoose.connection.once("open", () => {
  console.log("Your database is connected");
});

// gets html routes 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stats.html"));
});

app.get("/workout", (req, res) => {
    res.send(200);
});

// start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});