const express = require("express");
const mongoose = require("mongoose");

const app = express(); // an instance of Express

require("dotenv/config"); // access dotenv (.env)

// Import routes
const postsRoute = require("./routes/posts");

// ROUTES
app.use("/posts", postsRoute); // every time I want to go to posts, I just use the middleware that route the routes

app.get("/", (req, res) => {
  res.send("Home Page");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

// How do we start listening to the server
app.listen(3000);
