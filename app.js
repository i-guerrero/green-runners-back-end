// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get(`/`, (req, res) => {
  res.send(
    "Welcome to Green Runners API. Visit /greenscores to view your ranking."
  );
});

// ENTRIES ROUTES
// const greenscoresController = require("./controllers/greenscoresController");
// app.use("/entries", entriesController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORTS
module.exports = app;
