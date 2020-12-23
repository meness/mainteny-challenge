const express = require("express");

const router = express.Router();

// Fetch the list of students
router.get("/students", async (req, res) => {});

// Fetch the given student's profile
router.get("/students/:studentId", async (req, res) => {});

// Update the given student's profile
router.put("/students/:studentId", async (req, res) => {});

module.exports = router;
