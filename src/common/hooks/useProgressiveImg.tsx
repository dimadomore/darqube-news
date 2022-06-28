import { useEffect, useState } from 'react';

export const useProgressiveImg = (
  lowQualitySrc: string,
  highQualitySrc?: string,
) => {
  const [src, setSrc] = useState(lowQualitySrc);

  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();

    if (highQualitySrc) {
      img.src = highQualitySrc;
      img.onload = () => {
        setSrc(highQualitySrc);
      };
    }
  }, [lowQualitySrc, highQualitySrc]);

  return {
    src,
    blur: !!highQualitySrc && src === lowQualitySrc,
  };
};
