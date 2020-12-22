import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DashboardLayout } from "components";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";
import { Table } from "react-bootstrap";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useIO } from "hooks";

const Students = () => {
  const intl = useIntl();
  const io = useIO();
  const router = useRouter();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const res = await io.listStudents();

      setStudents(res);
      setLoading(false);
    } catch (err) {
      toast.error(intl.formatMessage({ id: "students.toast.fetch-students-error" }));
    }
  };

  useEffect(() => {
    fetchStudents();

    return () => {};
  }, []);

  /**
   * View the selected student's profile.
   *
   * @param {object} selectedStudent
   */
  const viewStudent = (selectedStudent) => {
    router.push(`/students/${selectedStudent.id}`);
  };

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "students.title" })}</title>
      </Head>
      <DashboardLayout loading={loading}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <FormattedMessage id="students.table.id-heading" />
              </th>
              <th>
                <FormattedMessage id="students.table.name-heading" />
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                onClick={() => {
                  viewStudent(student);
                }}
                className="cursor-pointer"
              >
                <td>{student.id}</td>
                <td>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </DashboardLayout>
    </>
  );
};

Students.propTypes = {};

export default Students;
