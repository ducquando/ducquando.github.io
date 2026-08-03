// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC, useEffect } from 'react';
import { Link } from 'react-router';
import { IconType } from '../data';
import '../stylesheets/error.css';

interface NotFoundProps {
  title: string;
  message: string;
  icons: IconType;
}

const NotFound: FC<NotFoundProps> = ({
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
            <img src="./graphics/4.svg" alt="4" className="title" />
            <img
              src="./graphics/LogoFull.svg"
              alt="Quan\'s logo representing 0"
              className="title rotating"
            />
            <img src="./graphics/4.svg" alt="4" className="title" />
          </div>
          <Link to="/" className="button large width-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path d={icons.Home} />
            </svg>
            <p className="button-text">Back to Home</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
