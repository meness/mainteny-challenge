import Link from "next/link";
import PropTypes from "prop-types";
import { Nav, Navbar as BNavbar } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const Navbar = () => {
  return (
    <BNavbar bg="primary" variant="dark">
      <Link href="/" passHref target="_self">
        <BNavbar.Brand>
          <FormattedMessage id="app-name" />
        </BNavbar.Brand>
      </Link>

      <Nav className="mr-auto">
        <Link href="/students" passHref target="_self">
          <Nav.Link>
            <FormattedMessage id="dashboard.navbar.students-title" />
          </Nav.Link>
        </Link>
      </Nav>
    </BNavbar>
  );
};

Navbar.propTypes = {};

export default Navbar;
