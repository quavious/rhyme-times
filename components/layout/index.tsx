import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="HAYE8UfjieIAg4t5t7jHsyPS1oCTPNuEEgGUkHCozSM"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8567722160341015"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="pt-6 mx-4">
        <div className="flex flex-col container max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mx-auto w-full text-white cursor-pointer">
            <Link href={'/'}>Rhyme Times!</Link>
          </h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
