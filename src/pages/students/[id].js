import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DashboardLayout, AssignNewCourse } from "components";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { useIO } from "hooks";

const ViewStudent = ({ studentId }) => {
  const intl = useIntl();
  const io = useIO();
  const [student, setStudent] = useState({});
  const [showAssignCoursePopup, setShowAssignCoursePopup] = useState(false);
  const [loading, setLoading] = useState(true);

  /**
   * Fetch the student's profile.
   */
  const fetchStudentProfile = async () => {
    try {
      const res = await io.fetchStudentProfile(studentId);

      setStudent(res);
      setLoading(false);
    } catch (err) {
      toast.error(intl.formatMessage({ id: "students.student.view.toast.fetch-student-error" }));
    }
  };

  useEffect(() => {
    fetchStudentProfile();

    return () => {};
  }, []);

  /**
   * Show/hide the assign new course popup
   */
  const toggleAssignCoursePopup = () => {
    setShowAssignCoursePopup(!showAssignCoursePopup);
  };

  return (
    <>
      <Head>
        <title>
          {intl.formatMessage(
            {
              id: "students.student.view.title",
            },
            { studentName: student?.name }
          )}
        </title>
      </Head>
      <DashboardLayout loading={loading}>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>
                <FormattedMessage
                  id="students.student.view.profile-card-heading"
                  values={{ studentName: student?.name }}
                />
              </Card.Header>
              <Card.Body className="text-center">
                <img src="/images/avatar.svg" className="avatar" />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} className="mt-2">
            <Card>
              <Card.Header>
                <FormattedMessage id="students.student.view.courses-card-heading" />
              </Card.Header>
              <Card.Body>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>
                        <FormattedMessage id="students.student.view.courses-card.table.course-name-heading" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {student?.courses?.map((course) => (
                      <tr key={course}>
                        <td>{course}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={toggleAssignCoursePopup}>
                  <FormattedMessage id="students.student.view.assign-new-course-title" />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <AssignNewCourse
          show={showAssignCoursePopup}
          onCancel={toggleAssignCoursePopup}
          studentId={studentId}
        />
      </DashboardLayout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  return { props: { studentId: ctx.params.id } };
}

ViewStudent.propTypes = {
  studentId: PropTypes.string.isRequired,
};

export default ViewStudent;
