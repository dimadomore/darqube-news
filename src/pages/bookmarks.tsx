import type { NextPage } from 'next';
import Head from 'next/head';

interface Props {
  news: any[];
}

const Bookmarks: NextPage<Props> = () => {
  return (
    <div>
      <Head>
        <title>Bookmarks</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-3xl font-bold">Bookmarks here</div>
    </div>
  );
};

export default Bookmarks;
