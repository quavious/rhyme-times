import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8567722160341015"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="pt-6 px-2">
        <div className="flex flex-col container w-96 mx-auto">
          <h1 className="text-4xl font-bold mx-auto text-white cursor-pointer">
            <Link href={'/'}>Rhyme Times!</Link>
          </h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
