const express = require("express");
const { listStudents } = require("../services/student");

const router = express.Router();

// Fetch the list of students
router.get("/students", async (req, res) => {
  try {
    const students = await listStudents();

    res.status(200).json(students);
  } catch (err) {
    res.status(500).end(err.message);
  }
});

// Fetch the given student's profile
router.get("/students/:studentId", async (req, res) => {});

// Update the given student's profile
router.put("/students/:studentId", async (req, res) => {});

module.exports = router;
