import "@/public/scss/global.scss";
import Head from "next/head";

const MaintenyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MaintenyApp;
