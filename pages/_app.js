import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }
  // useEffect(() => {
  //   require("../node_modules/bootstrap/dist/js/bootstrap");
  // }, []);
  return (
    <>
      <Head>
        <title>Valorant Games</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
