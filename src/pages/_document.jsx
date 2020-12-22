import Document, { Html, Head, Main, NextScript } from "next/document";
import PropTypes from "prop-types";

class MaintenyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <link rel="icon" href="/favicon.ico" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MaintenyDocument.propTypes = {};

export default MaintenyDocument;
