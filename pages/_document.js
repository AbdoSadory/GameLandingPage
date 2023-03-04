import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
       
          <meta
            name="description"
            content="Valorant games for fantasy and action games, Rise your adrenaline, keep online to our maps, agents and news"
          />
          <meta
            name="keywords"
            content="Games,fantasy,action,computers,phones,laptops"
          />
          <meta name="author" content="ValorantGames" />
        
          <link
            rel="canonical"
            href="https://abdosadory.github.io/gameWebsiteVanilla/"
          />
          <link rel="icon shortcut" href="assets/images/val-logo-small.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
