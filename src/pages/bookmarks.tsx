import type { NextPage } from 'next';
import Head from 'next/head';

import { NewsCardList } from 'components/shared';
import { MainLayout } from 'components/layout';
import { useAppDispatch, useAppSelector, useSearch } from 'common/hooks';
import { removeOne } from 'store/features/bookmark';
import { NewsItem } from 'common/types';
import { filterByTextInKeys } from 'common/utils';

const Bookmarks: NextPage = () => {
  const { ids, entities } = useAppSelector((state) => state.bookmark);
  const dispatch = useAppDispatch();
  const bookmarks = Object.values(entities) as NewsItem[];
  const { searchValue, setSearchValue } = useSearch();

  const removeBookmark = (newsItem: NewsItem) => {
    dispatch(removeOne(newsItem.id));
  };

  const newsCardListData =
    searchValue && searchValue.length > 2
      ? (filterByTextInKeys(bookmarks, searchValue, [
          'headline',
          'summary',
        ]) as NewsItem[])
      : bookmarks;

  return (
    <MainLayout setSearchValue={setSearchValue}>
      <Head>
        <title>Bookmarks</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsCardList
        data={newsCardListData}
        bookmarkIds={ids as number[]}
        onNewsItemSaveToggle={removeBookmark}
      />
    </MainLayout>
  );
};

export default Bookmarks;
