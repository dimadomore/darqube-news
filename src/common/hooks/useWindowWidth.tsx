import { useEffect, useState } from 'react';
import { MOBILE_BREAKPOINT } from 'common/constants';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isMobile: width < MOBILE_BREAKPOINT,
  };
};
