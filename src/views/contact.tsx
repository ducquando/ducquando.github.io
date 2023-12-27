// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import * as React from 'react';
import { useEffect } from 'react';
import '../stylesheets/contact.css';

interface ContactProps {
  title: string;
  icons: { [key: string]: any };
  contactEmail: { [key: string]: any };
  contactConnect: { [key: string]: any }[];
  contactInfo: { [key: string]: any }[];
}

export const Contact: React.FC<ContactProps> = ({
  title,
  contactEmail,
  contactConnect,
  contactInfo,
  icons,
}) => {
  useEffect(() => {
    document.title = title;
  }, []);

  function InfoSection(): JSX.Element {
    return (
      <>
        {contactInfo?.map((info: { [key: string]: any }) => {
          return (
            <div className="info-connect-section" key={info['Details']}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path d={icons[info['SVG']]} />
              </svg>
              <div className="info-subsection">
                <p>{info['Details']}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  function SocialSection(): JSX.Element {
    return (
      <>
        {contactConnect?.map((connect: { [key: string]: any }) => {
          return (
            <div className="info-connect-section" key={connect['Name']}>
              <div className="connect-subsection">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox={connect['ViewBox']}
                >
                  <path d={icons[connect['SVG']]} />
                </svg>
                <h3>{connect['Name']}</h3>
              </div>
              <a href={connect['Link']} className="button">
                <p>{connect['Details']}</p>
              </a>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div className="main-container">
        <img
          src={'../assets/graphics/' + title + '.svg'}
          alt={title}
          className="width-90"
        />
        <p className="mid width-90">
          Let's create memorable experiences together
        </p>

        <div className="contact-section width-90">
          <h1>CONTACT INFORMATION</h1>
          <div className="info-connect-container">
            {/* Basic information */}
            {InfoSection()}

            {/* Email */}
            <div className="info-connect-section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path d={icons[contactEmail['SVG']]} />
              </svg>
              <a href={'mailto:' + contactEmail['Link']} className="button">
                <p>{contactEmail['Details']}</p>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-section width-90">
          <h1>CONNECT ME ON</h1>
          <div className="info-connect-container">{SocialSection()}</div>
        </div>
      </div>
    </>
  );
};
