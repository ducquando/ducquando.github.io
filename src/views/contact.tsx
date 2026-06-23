// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/contact.css';

interface ContactProps {
  title: string;
  icons: { [key: string]: any };
  contactEmail: { [key: string]: any };
  contactConnect: { [key: string]: any }[];
  contactInfo: { [key: string]: any }[];
}

const Contact: FC<ContactProps> = ({
  title,
  contactEmail,
  contactConnect,
  contactInfo,
  icons,
}) => {
  useEffect(() => {
    document.title = title;
  }, []);

  function InfoSection() {
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

  function SocialSection() {
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
              <Link to={connect['Link']} className="button">
                <p>{connect['Details']}</p>
              </Link>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div className="main-container">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet={`./graphics/Contact@0.5x.svg`}
            className="width-90"
          />
          <source
            media="(min-width: 641px)"
            srcSet={`./graphics/Contact.svg`}
            className="width-90"
          />
          <img
            src={`./graphics/Contact.svg`}
            alt="Contact thumbnail"
            className="width-90"
          />
        </picture>
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
              <Link to={'mailto:' + contactEmail['Link']} className="button">
                <p>{contactEmail['Details']}</p>
              </Link>
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

export default Contact;
