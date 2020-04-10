// Membuat file ROUTING sendiri yang nanti akan diakses di main file
// Routes untuk Posts

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Posts Page");
});

router.get("/specific", (req, res) => {
  res.send("Posts > Specific Page");
});
module.exports = router;
