require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("../db");

//const jwtToken = process.env.JWT_SECRET;

router.post("/login", async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT * FROM admins WHERE username = $1",
      [username]
    );
    const user = response.rows[0];

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.json({ message: "Login successful", token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err.message);
  }
});

const authenticateToken = (req, res, next) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    req.user = user; // Save user data for use in the route
    next();
  });
};

router.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}!` });
});

module.exports = router;
