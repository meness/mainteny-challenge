const StudentModel = require("../models/student");

/**
 * Fetch the list of students.
 *
 * @returns {object[]}
 */
async function listStudents() {
  return StudentModel.listStudents();
}

module.exports = { listStudents };
