// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import * as React from 'react';
import { useEffect } from 'react';
import '../stylesheets/error.css';

interface NotFoundProps {
  title: string;
  message: string;
  icons: { [key: string]: any };
}

export const NotFound: React.FC<NotFoundProps> = ({
  title,
  message,
  icons,
}) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="message-container width-90">
          <p className="mid">{message}</p>
          <div id="message-section">
            <img src="/assets/graphics/4.svg" alt="4" className="title" />
            <img
              src="/assets/graphics/LogoFull.svg"
              alt="Quan\'s logo representing 0"
              className="title rotating"
            />
            <img src="/assets/graphics/4.svg" alt="4" className="title" />
          </div>
          <a href="/" className="button large width-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path d={icons['Home']} />
            </svg>
            <p className="button-text">Back to Home</p>
          </a>
        </div>
      </div>
    </>
  );
};
