const express = require("express");
const { listStudents, fetchStudentProfile } = require("../services/student");

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
router.get("/students/:studentId", async (req, res) => {
  try {
    const student = await fetchStudentProfile(req.params.studentId);

    res.status(200).json(student);
  } catch (err) {
    res.status(500).end(err.message);
  }
});

// Update the given student's profile
router.put("/students/:studentId", async (req, res) => {});

module.exports = router;
