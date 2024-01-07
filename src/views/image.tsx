import * as React from 'react';
import { useState, useEffect } from 'react';

export const FastImage = ({
  placeholderSrc,
  src,
  className,
  ...props
}: {
  [key: string]: string;
}) => {
  const [imgSource, setImgSource] = useState(placeholderSrc || src);
  const customClass =
    placeholderSrc && imgSource === placeholderSrc
      ? 'image-loading'
      : 'image-loaded';

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSource(src);
    };
  }, [src]);

  return (
    <img
      {...{ src: imgSource, ...props }}
      alt={props.alt || ''}
      className={`${customClass} ${className}`}
    />
  );
};
