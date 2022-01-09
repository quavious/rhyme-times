import Link from 'next/link';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="pt-6 px-2">
      <div className="flex flex-col container w-96 mx-auto">
        <Link href={'/'} passHref>
          <h1 className="text-4xl font-bold mx-auto text-white cursor-pointer">
            Rhyme Times!
          </h1>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default Layout;
