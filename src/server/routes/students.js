const express = require("express");
const { listStudents, fetchStudentProfile, updateStudentProfile } = require("../services/student");

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
router.put("/students/:studentId", async (req, res) => {
  try {
    await updateStudentProfile(req.params.studentId, req.body.courseName);

    res.status(204).end();
  } catch (err) {
    res.status(500).end(err.message);
  }
});

module.exports = router;
