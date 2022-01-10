import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import Layout from '../../components/layout';

export type Definition = {
  definition: string;
  partOfSpeech?: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const keyword = context.params?.word;
  if (!apiKey || !keyword || typeof keyword !== 'string') {
    return {
      notFound: true,
    };
  }

  const fetchRawData = async (
    keyword: string,
    apiKey: string,
    path: string,
  ) => {
    const resp = await fetch(
      `https://wordsapiv1.p.rapidapi.com/words/${keyword}/${path}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
          'x-rapidapi-key': `${apiKey}`,
        },
      },
    );
    const data = await resp.json();
    return data;
  };

  let response = await fetchRawData(keyword, apiKey, 'rhymes');
  const rhymes = response.rhymes.all
    ? (response.rhymes.all as string[]).filter(
        (e) => e !== decodeURIComponent(keyword),
      )
    : [];
  response = await fetchRawData(keyword, apiKey, 'definitions');
  const definitions = response.definitions
    ? (response.definitions as Definition[])
    : [];

  return {
    props: {
      rhymes,
      definitions,
      title: keyword,
    },
  };
};

const WordPage = (props: any) => {
  const [words, setWords] = useState<string[]>([]);
  const [definitions, setDefinitions] = useState<Definition[]>([]);
  const [title, setTitle] = useState('');
  const [keyword, setKeyword] = useState('');
  const [warning, setWarning] = useState(false);
  const router = useRouter();
  // const AdComponent = dynamic(() => import('../../components/ad/index'));

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('USE_EFFECT');
    }
    if (!props || !props.rhymes || !props.definitions) {
      return;
    }
    setKeyword('');
    setWords(props.rhymes);
    setDefinitions(props.definitions);

    setTitle(props.title);
    document.getElementById('words-box')?.scroll({
      top: Infinity,
    });
  }, [props]);

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
        <title>{title} - Rhyme Times!</title>
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
      <h4 className="font-bold my-2 text-white">Rhymes of {title}</h4>
      <div
        className="h-96 overflow-y-scroll mx-auto w-full mt-2 shadow-lg bg-white"
        id="words-box"
      >
        <h4 className="font-bold pt-2 pb-1 px-2 text-xl">Definition</h4>
        {definitions && definitions.length > 0 ? (
          definitions.map((definition, i) => (
            <h4 key={i} className="font-medium py-0.5 px-2 text-sm">
              - {definition.definition}
            </h4>
          ))
        ) : (
          <h4 className="font-medium py-0.5 px-2 text-sm">
            No Definitions Found
          </h4>
        )}
        <h4 className="font-bold px-2 pt-2 pb-1 text-xl">Rhymes</h4>
        {words && words.length > 0 ? (
          words.map((word, i) => (
            <h4
              key={i}
              className="font-bold pt-2 pb-1 px-2 cursor-pointer hover:text-teal-400"
            >
              <Link href={`/word/${word}`}>{`${i + 1}. ${word}`}</Link>
            </h4>
          ))
        ) : (
          <h4 className="font-bold py-1 px-2">No Rhymes Found</h4>
        )}
      </div>
    </Layout>
  );
};

export default WordPage;
