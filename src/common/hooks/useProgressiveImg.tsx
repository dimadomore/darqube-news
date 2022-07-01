import { useEffect, useState } from 'react';

export const useProgressiveImg = (
  lowQualitySrc: string,
  highQualitySrc?: string,
) => {
  const [src, setSrc] = useState(lowQualitySrc);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();

    if (highQualitySrc) {
      img.src = highQualitySrc;
      img.onload = () => {
        setSrc(highQualitySrc);
      };
      img.onerror = () => {
        setSrc(lowQualitySrc);
        setError(true);
      };
    }
  }, [lowQualitySrc, highQualitySrc]);

  return {
    src,
    blur: !!highQualitySrc && src === lowQualitySrc && !isError,
  };
};
