// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC } from 'react';
import '../stylesheets/error.css';

export const Loading: FC = () => {
  return (
    <>
      <div className="main-container">
        <div className="message-container width-90">
          <div id="message-section">
            <img
              src="./graphics/LogoFull.svg"
              alt="Quan\'s logo representing 0"
              className="title rotating"
            />
          </div>
        </div>
      </div>
    </>
  );
};
