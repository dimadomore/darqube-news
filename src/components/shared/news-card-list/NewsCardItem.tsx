import { NewsItem } from 'types';
import { useProgressiveImg } from 'common/hooks';
import { formatTimestamp } from 'common/utils';
import { BookmarkIcon } from 'components/shared';

interface Props {
  itemData: NewsItem;
  isLatest?: boolean;
}

export const NewsCardItem: React.FC<Props> = ({ itemData, isLatest }) => {
  const { headline, image, related, datetime } = itemData;
  const { src, blur } = useProgressiveImg('./fallback-news-bg.png', image);

  const date = new Date(datetime * 1000);

  console.log('date:', date);

  const formattedDate = formatTimestamp(datetime, {
    day: 'numeric',
    month: 'short',
  });

  return (
    <div
      className="rounded-md relative overflow-hidden "
      style={{
        height: '425px',
        background:
          'linear-gradient(180deg, rgba(28, 58, 82, 0) 0%, #05141B 75.5%)',
        filter: blur ? 'blur(2px)' : '',
      }}
    >
      {image && (
        <img
          src={src}
          alt={`${related} news image`}
          style={{
            background:
              'linear-gradient(180deg, rgba(28, 58, 82, 0) 0%, #05141B 75.5%)',
            opacity: 0.5,
            maxHeight: '100%',
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            width: '100%',
            color: 'white',
          }}
        />
      )}
      <div className="relative py-7 pl-6 pr-5 h-full flex flex-col justify-between">
        <span className="border rounded-full py-[5px] px-[15px] text-[10px] self-start">
          {related}
        </span>
        <div>
          <h3 className="mb-5">{headline}</h3>
          <div className="flex justify-between">
            <div className="text-xs opacity-75">{formattedDate}</div>
            <BookmarkIcon isActive={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
