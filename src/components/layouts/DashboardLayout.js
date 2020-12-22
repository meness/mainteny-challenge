import { useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../navbar/Navbar";
import { Container } from "react-bootstrap";
import withLoading from "hocs/Loading";

const DashboardLayout = ({ loading, children, ...props }) => {
  useEffect(() => {
    props.loading = loading;

    return () => {};
  }, [loading]);

  return (
    <>
      <Navbar />
      <Container className="mt-4">{children}</Container>
    </>
  );
};

DashboardLayout.propTypes = {
  loading: PropTypes.bool,
};

DashboardLayout.defaultProps = {
  loading: false,
};

export default withLoading(DashboardLayout);
