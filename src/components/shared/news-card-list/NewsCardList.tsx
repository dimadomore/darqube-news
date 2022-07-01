import { NewsItem } from 'common/types';

import { NewsCardItem } from './NewsCardItem';

interface Props {
  data: NewsItem[];
  bookmarkIds: number[];
  onNewsItemSaveToggle: (newsItemId: NewsItem) => void;
}

export const NewsCardList: React.FC<Props> = ({
  data,
  bookmarkIds,
  onNewsItemSaveToggle,
}) => {
  if (!data?.length) return null;

  return (
    <div className="mb-6">
      <ul className="xl:grid grid-cols-[repeat(3,280px)] auto-rows-[425px] gap-[18px]">
        {data.map((item) => {
          const isSaved = bookmarkIds.includes(item.id);

          return (
            <li key={item.id}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <NewsCardItem
                  itemData={item}
                  onSaveToggle={onNewsItemSaveToggle}
                  isSaved={isSaved}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
