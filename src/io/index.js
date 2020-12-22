import Axios from "axios";

class IO {
  /**
   * Fetch the list of students.
   *
   * @returns {object[]} List of students
   */
  async listStudents() {
    const res = await Axios.get("/api/students");

    return res.data;
  }

  /**
   * Fetch the given student's profile.
   *
   * @param {string} studentId
   * @returns {object} Given student's profile
   */
  async fetchStudentProfile(studentId) {
    const res = await Axios.get(`/api/students/${studentId}`);

    return res.data;
  }
}

export default IO;
