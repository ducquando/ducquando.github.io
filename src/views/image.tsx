// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC, useState, useEffect } from 'react';
import '../stylesheets/image.css';

interface FastImageProbs {
  placeholderSrc: string,
  src: string,
  className: string,
  alt?: string,
  leftOffset?: string,
  rightOffset?: string,
  topOffset?: string,
}

export const FastImage: FC<FastImageProbs> = ({
  placeholderSrc,
  src,
  className,
  ...props
}) => {
  const [imgSource, setImgSource] = useState(placeholderSrc || src);
  const customClass =
    placeholderSrc && imgSource === placeholderSrc ? 'loading' : 'loaded';

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
      className={`loading-image ${customClass} ${className}`}
      alt={props.alt || 'Image'}
      style={{ 
        left: (props.leftOffset || '0') + 'rem', 
        right: (props.rightOffset || '0') + 'rem',
        top: (props.topOffset || '0') + 'rem',
      }}
      key={imgSource}
      id={imgSource}
    />
  );
};
