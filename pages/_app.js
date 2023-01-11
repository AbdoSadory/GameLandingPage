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
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Valorant games for fantasy and action games, Rise your adrenaline, keep online to our maps, agents and news"
        />
        <meta
          name="keywords"
          content="Games,fantasy,action,computers,phones,laptops"
        />
        <meta name="author" content="ValorantGames" />
        <title>Valorant Games</title>
        <link
          rel="canonical"
          href="https://abdosadory.github.io/gameWebsiteVanilla/"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
