// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC } from "react";
import { Link } from "react-router-dom";
import { FastImage } from "./image";

interface ThumbnailProps {
  id: string,
  posts: { [key: string]: any },
  fields: { [key: string]: any },
  icons: { [key: string]: any },
}

export const Thumbnail: FC<ThumbnailProps> = ({
  id,
  posts,
  fields,
  icons,
}) => {
  return (
    <>
      <Link to={'/works' + posts[id]['Link']} className="post-section width-30">
        <FastImage
          src={`${posts[id]['Thumbnail']}${posts[id]['Format']}`}
          placeholderSrc={`${posts[id]['Thumbnail']}@0.33x.webp`}
          className="width-30"
          alt={posts[id]['Name']}
        />
        <div className="post-overlay" />
        <div className="post-title">
          <h3>{posts[id]['Name']}: {posts[id]['Subtitle']}</h3>
          <div className="post-items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path d={icons['Field']} />
            </svg>
            <div className="listing">
              {Object.entries(fields).map((params) => {
                const field = params[1];
                return field['PostID'].includes(id) ? (
                  <p className="caption">{field['Alias']}</p>
                ) : (
                  <></>
                );
              })}
            </div>
          </div>
          <div className="post-items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
            >
              <path d={icons['Calendar']} />
            </svg>
            <p className="caption">
              {posts[id]['Duration'] + ' (' + posts[id]['Date'] + ')'}
            </p>
          </div>
          <div className="post-items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d={icons['Tag']} />
            </svg>
            <p className="caption">{posts[id]['Tags']}</p>
          </div>
        </div>
        <div className="post-view">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
          >
            <path d={icons['Eye']} />
          </svg>
          <p className="button-text">View project</p>
        </div>
      </Link>
    </>
  );
}
