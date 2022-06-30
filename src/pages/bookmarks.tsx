import type { NextPage } from 'next';
import Head from 'next/head';

import { NewsCardList } from 'components/shared';
import { useAppDispatch, useAppSelector } from 'common/hooks';
import { removeOne } from 'store/features/bookmark';
import { NewsItem } from 'common/types';

const Bookmarks: NextPage = () => {
  const { ids, entities } = useAppSelector((state) => state.bookmark);
  const dispatch = useAppDispatch();
  const bookmarks = Object.values(entities) as NewsItem[];

  const removeBookmark = (newsItem: NewsItem) => {
    dispatch(removeOne(newsItem.id));
  };

  return (
    <div>
      <Head>
        <title>Bookmarks</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsCardList
        data={bookmarks}
        bookmarkIds={ids as number[]}
        onNewsItemSaveToggle={removeBookmark}
      />
    </div>
  );
};

export default Bookmarks;
