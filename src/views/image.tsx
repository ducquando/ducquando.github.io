import * as React from 'react';
import { useState, useEffect } from 'react';
import '../stylesheets/image.css';

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
    placeholderSrc && imgSource === placeholderSrc ? 'loading' : 'loaded';

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSource(src);
    };
  }, [src]);

  return (
    // <div className={className} >
    <>
      <img
        {...{ src: imgSource, ...props }}
        className={`loading-image ${customClass} ${className}`}
        alt={props.alt || ''}
      />
      <div className={`loading-overlay ${customClass}`} />
      <img
        src="/assets/graphics/Loading.svg"
        className={`loading-logo fading ${customClass}`}
        alt="Loading icon"
      />
    </>
    // </div>
  );
};
