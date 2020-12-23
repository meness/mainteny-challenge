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

module.exports = { listStudents };
