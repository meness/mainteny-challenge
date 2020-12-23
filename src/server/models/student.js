const admin = require("firebase-admin");

/**
 * Fetch students.
 *
 * @returns {object[]} List of students
 */
async function listStudents() {
  const studentsSnapshot = await global.admin.firestore().collection("students").get();
  const students = studentsSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return students;
}

/**
 * Fetch the given student's profile.
 *
 * @param {string} studentId Student ID
 * @returns {object} Given student's profile
 */
async function fetchStudentProfile(studentId) {
  const studentSnapshot = await global.admin
    .firestore()
    .collection("students")
    .doc(studentId)
    .get();
  const student = { id: studentSnapshot.id, ...studentSnapshot.data() };

  return student;
}

/**
 * Update the given student's profile.
 *
 * @param {string} studentId Student ID
 * @param {string} courseName New course name
 */
async function updateStudentProfile(studentId, courseName) {
  const result = await global.admin
    .firestore()
    .collection("students")
    .doc(studentId)
    .update({ courses: admin.firestore.FieldValue.arrayUnion(courseName) });

  return result;
}

module.exports = { listStudents, fetchStudentProfile, updateStudentProfile };
