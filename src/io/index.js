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
}

export default IO;
