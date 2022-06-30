import { SyntheticEvent, useEffect, useState } from 'react';

interface Props {
  isActive: boolean;
  onClick?: () => void;
}

export const BookmarkIcon: React.FC<Props> = ({ isActive, onClick }) => {
  const source = `./bookmark-icon${isActive ? '-active' : ''}.svg`;
  const [shouldAnimate, setAnimateState] = useState(false);

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick && onClick();
    setAnimateState(true);
  };

  useEffect(() => {
    if (shouldAnimate) {
      setTimeout(() => {
        setAnimateState(false);
      }, 500);
    }
  }, [shouldAnimate]);

  return (
    <button onClick={handleClick} className="p-1">
      <img
        className={`${shouldAnimate ? 'animate-ping' : ''}`}
        src={source}
        alt=""
      />
    </button>
  );
};
