import Head from "next/head";
import { Jumbotron } from "react-bootstrap";
import PropTypes from "prop-types";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import { DashboardLayout } from "components";

const Dashboard = () => {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{intl.formatMessage({ id: "dashboard.title" })}</title>
      </Head>
      <DashboardLayout>
        <Jumbotron>
          <h1>
            <FormattedMessage id="dashboard.jumbotron-heading" />
          </h1>

          <p>
            <FormattedMessage
              id="dashboard.jumbotron-body"
              values={{
                studentsLink: (chunks) => (
                  <Link href="/students" target="_self">
                    <a>{chunks}</a>
                  </Link>
                ),
              }}
            />
          </p>
        </Jumbotron>
      </DashboardLayout>
    </>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
