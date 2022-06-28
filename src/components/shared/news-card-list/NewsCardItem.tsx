import { NewsItem } from 'common/types';
import { useProgressiveImg } from 'common/hooks';
import { formatTimestamp } from 'common/utils';
import { BookmarkIcon } from 'components/shared';

interface Props {
  itemData: NewsItem;
  isLatest?: boolean;
}

const fallbackNewsCardImage = './fallback-news-bg.png';

export const NewsCardItem: React.FC<Props> = ({ itemData, isLatest }) => {
  const { headline, image, related, datetime, url } = itemData;
  const { src: imageSrc, blur } = useProgressiveImg(
    fallbackNewsCardImage,
    image,
  );

  const formattedDate = formatTimestamp(datetime, {
    day: 'numeric',
    month: 'short',
  });

  return (
    <div
      className={`group h-full rounded-md relative overflow-hidden  ${
        blur ? 'blur-sm' : ''
      }`}
      style={{
        background:
          'linear-gradient(180deg, rgba(28, 58, 82, 0) 0%, #05141B 75.5%)',
      }}
    >
      {image && (
        <img
          className="transition-opacity opacity-50 group-hover:opacity-75"
          src={imageSrc}
          alt={`${related} news image`}
          style={{
            background:
              'linear-gradient(180deg, rgba(28, 58, 82, 0) 0%, #05141B 75.5%)',
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
        {isLatest && (
          <span className="absolute right-[30px] py-1 px-[6px] bg-red uppercase text-[8px] leading-[9px]">
            Latest news
          </span>
        )}
        <span className="border rounded-full py-[5px] px-[15px] text-[10px]  self-start">
          {related}
        </span>
        <div>
          <h3 className={`mb-5 ${isLatest ? 'text-2xl' : 'text-xl'}`}>
            {headline}
          </h3>
          <div className="flex justify-between items-center">
            {isLatest && (
              <a
                href={url}
                target="_blank"
                className="flex border-r border-opacity-8 pr-4 mr-4"
                rel="noreferrer"
              >
                <img src="/arrow-right-icon.svg" alt="" />
                <span className="font-bold text-sm ml-3">
                  Read the research
                </span>
              </a>
            )}
            <div className="text-xs opacity-75 flex-1">{formattedDate}</div>
            <BookmarkIcon isActive={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
