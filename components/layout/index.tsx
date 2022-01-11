import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
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
