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

module.exports = { listStudents, fetchStudentProfile };
