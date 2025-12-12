// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import * as React from 'react';
import { useState, useEffect } from 'react';
import '../stylesheets/image.css';

export const FastImage = ({
  placeholderSrc,
  src,
  className,
  leftOffset,
  rightOffset,
  ...props
}: {
  [key: string]: string;
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
      alt={props.alt || ''}
      style={{ left: leftOffset + 'rem', right: rightOffset + 'rem' }}
    />
  );
};
