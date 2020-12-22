import Axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useIntl, FormattedMessage } from "react-intl";
import { toast } from "react-toastify";

const AssignNewCourse = ({ show, onCancel, studentId }) => {
  const intl = useIntl();
  const [courseName, setCourseName] = useState();

  const assignNewCourse = async () => {
    try {
      await Axios.put(`/api/students/${studentId}`, { courseName });
      toast.success(
        intl.formatMessage({ id: "students.student.assign-new-course.toast.assign-succeeded" })
      );
      onCancel();
    } catch (err) {
      toast.error(
        intl.formatMessage({ id: "students.student.assign-new-course.toast.assign-failed" })
      );
    }
  };

  return (
    <Modal animation centered show={show} onHide={onCancel}>
      <Modal.Header>
        <FormattedMessage id="students.student.view.assign-new-course-heading" />
      </Modal.Header>
      <Modal.Body>
        <FormControl
          placeholder={intl.formatMessage({
            id: "students.student.view.assign-new-course.form.course-name-placeholder",
          })}
          onChange={(e) => {
            setCourseName(e.target.value);
          }}
          size="lg"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={assignNewCourse}>
          <FormattedMessage id="students.student.view.assign-new-course.form.assign-title" />
        </Button>
        <Button variant="secondary" onClick={onCancel} style={{ transition: "none" }}>
          <FormattedMessage id="students.student.view.assign-new-course.form.cancel-title" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AssignNewCourse.propTypes = {
  /**
   * Show/hide the popup.
   */
  show: PropTypes.bool.isRequired,
  /**
   * Handle the popup on hide.
   */
  onCancel: PropTypes.func.isRequired,
  /**
   * Student ID that will be assigned the new course.
   */
  studentId: PropTypes.string.isRequired,
};

export default AssignNewCourse;
