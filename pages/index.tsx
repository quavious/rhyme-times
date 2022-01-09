import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Layout from '../components/layout';

export const assets = [
  'aftertime',
  'anaheim',
  'bedtime',
  'begrime',
  'birdlime',
  'brooklime',
  'chime',
  'chyme',
  'clime',
  'climb',
  'crime',
  'cyme',
  'daytime',
  'dime',
  'downtime',
  'grime',
  'guggenheim',
  'lifetime',
  'lime',
  'lunchtime',
  'lysozyme',
  'maritime',
  'mealtime',
  'mime',
  'mistime',
  'nighttime',
  'overtime',
  'pantomime',
  'pastime',
  'playtime',
  'prime',
  'quicklime',
  'ragtime',
  'rime',
  'seedtime',
  'slime',
  'small-time',
  'sometime',
  'springtime',
  'sublime',
  'summertime',
  'suppertime',
  'teatime',
  'thyme',
  'time',
  'wartime',
  'wintertime',
  'xenotime',
  'american brooklime',
  'christmas pantomime',
  'dance pantomime',
  'shadow pantomime',
  'the sublime',
];

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [warning, setWarning] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword || keyword.length < 3) {
      setWarning(true);
      return;
    }
    router.push(`/word/${keyword}`);
  };
  return (
    <Layout>
      <Head>
        <title>Rhyme Times!</title>
      </Head>
      <div>
        <form
          className="w-full rounded-lg border-2 mt-4 flex mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="keyword"
            id="keyword"
            className="w-full rounded-l-lg py-1 px-1"
            autoComplete="off"
            value={keyword}
            onChange={(e) => {
              e.preventDefault();
              setKeyword(e.target.value);
              setWarning(false);
            }}
          />
          <button
            className="bg-blue-900 text-white rounded-r-lg px-1"
            type="submit"
          >
            Search
          </button>
        </form>
        {warning && (
          <h4 className="text-red-500 self-start text-sm mx-auto w-full">
            The keyword must be least 3 characters
          </h4>
        )}
      </div>
      <h4 className="font-bold my-3 text-white">
        You can look around for examples.
      </h4>
      <div className="h-96 overflow-y-scroll mx-auto w-96 mt-4 bg-white pt-1 pb-4 px-2">
        {assets.map((word, i) => (
          <Link key={i} passHref href={`/word/${word}`}>
            <h4
              key={i}
              className="font-bold my-3 cursor-pointer hover:text-teal-400 text-lg"
            >
              {word}
            </h4>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
