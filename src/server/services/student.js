const StudentModel = require("../models/student");

/**
 * Fetch the list of students.
 *
 * @returns {object[]}
 */
async function listStudents() {
  return StudentModel.listStudents();
}

/**
 * Fetch the given student's profile.
 *
 * @param {string} studentId Student ID
 * @returns {object} Given student's profile
 */
async function fetchStudentProfile(studentId) {
  return StudentModel.fetchStudentProfile(studentId);
}

module.exports = { listStudents, fetchStudentProfile };
