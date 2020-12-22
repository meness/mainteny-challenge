import "@/public/scss/global.scss";
import Head from "next/head";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import locales from "intl";
import { ToastContainer } from "react-toastify";

const MaintenyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = locales[locale];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
        <Component {...pageProps} />
      </IntlProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default MaintenyApp;
