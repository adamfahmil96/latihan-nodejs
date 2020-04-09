const express = require("express");
const mongoose = require("mongoose");

const app = express(); // an instance of Express

require("dotenv/config"); // access dotenv (.env)

// ROUTES
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/posts", (req, res) => {
  res.send("Post Page");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

// How do we start listening to the server
app.listen(3000);
