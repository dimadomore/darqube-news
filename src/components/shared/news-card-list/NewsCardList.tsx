import Link from 'next/link';
import { NewsItem } from 'common/types';

import { NewsCardItem } from './NewsCardItem';

interface Props {
  data: NewsItem[];
}

export const NewsCardList: React.FC<Props> = ({ data }) => {
  if (!data?.length) return null;

  return (
    <div className="mb-6">
      <ul
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(3, 280px)',
          gridAutoRows: '425px',
          gridGap: '18px',
        }}
      >
        {data.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <NewsCardItem itemData={item} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
