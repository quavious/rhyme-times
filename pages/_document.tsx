import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Rhyme Times" />
          <meta name="apple-mobile-web-app-title" content="Rhyme Times" />
          <meta
            name="msapplication-starturl"
            content="https://rhyme-times.vercel.app/"
          />
          <meta name="theme-color" content="#0f172a" />
          <meta
            name="google-site-verification"
            content="HAYE8UfjieIAg4t5t7jHsyPS1oCTPNuEEgGUkHCozSM"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
