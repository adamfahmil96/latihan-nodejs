const express = require("express");
const app = express();

app.use(logger); // use of middleware

app.get("/", (req, res) => {
  console.log("Home Page");
  res.send("Home Page");
});

app.get("/users", auth, (req, res) => {
  console.log(`User is admin = ${req.admin}`);
  console.log("Users Page");
  res.send("Users Page");
});

// function to prove the middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// another middleware
function auth(req, res, next) {
  if (req.query.admin === "true") {
    req.admin = true;
    next();
  } else {
    console.log("No Auth");
    res.send("No Auth");
  }
}
app.listen(3000, () => console.log("Server started!"));
