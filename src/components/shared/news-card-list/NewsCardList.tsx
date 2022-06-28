import { NewsItem } from 'types';

import { NewsCardItem } from './NewsCardItem';

interface Props {
  data: NewsItem[];
}

export const NewsCardList: React.FC<Props> = ({ data }) => {
  console.log(data);

  if (!data?.length) return null;

  return (
    <div>
      <ul
        className="grid"
        style={{ gridTemplateColumns: 'repeat(3, 280px)', gridGap: '18px' }}
      >
        {data.map((item) => (
          <li key={item.id}>
            <NewsCardItem itemData={item} />
          </li>
        ))}
        {data.map((item) => (
          <li key={item.id}>
            <NewsCardItem itemData={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
