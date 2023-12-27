// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright © Do Duc Quan. All rights reserved.

import * as React from 'react';
import '../stylesheets/footer.css';

interface FooterProps {
  contactEmail: { [key: string]: any };
  contactConnect: { [key: string]: any }[];
  icons: { [key: string]: any };
}

export const Footer: React.FC<FooterProps> = ({
  contactEmail,
  contactConnect,
  icons,
}) => {
  function LinkSection(
    name: string,
    icon: string,
    link: string,
    viewbox: string,
    size: string,
    width: string,
  ): JSX.Element {
    return (
      <>
        <a href={link} className={'button large ' + width}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={viewbox}
          >
            <path d={icon} />
          </svg>
          <p className="button-text">{name}</p>
        </a>
      </>
    );
  }

  function ConnectSection(
    contactConnect: { [key: string]: any }[],
  ): JSX.Element {
    return (
      <>
        {contactConnect?.map((connect: { [key: string]: any }) => {
          return (
            <div key={connect['Name']}>
              {LinkSection(
                connect['Name'],
                icons[connect['SVG']],
                connect['Link'],
                connect['ViewBox'],
                connect['Size'],
                'width-25',
              )}
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div className="width-100" style={{ height: '5.775rem' }}></div>
      <div
        id="footer-container"
        style={{ backgroundImage: 'url(../assets/graphics/Footer.svg)' }}
      >
        {/* Logo */}
        <div id="footer-logo-section" className="width-100">
          <div className="divider" />
          <img
            id="footer-logo"
            className="rotating"
            src="/assets/graphics/LogoFull.svg"
            alt="Quan smiley logo"
          />
        </div>

        {/* Connect */}
        <p className="large">Stay connected</p>
        <div id="footer-link-section" className="width-90">
          {/* Mail */}
          {LinkSection(
            contactEmail['Details'],
            icons[contactEmail['SVG']],
            'mailto:' + contactEmail['Link'],
            contactEmail['ViewBox'],
            contactEmail['Size'],
            'width-70',
          )}

          <div id="footer-connect-section">
            {ConnectSection(contactConnect)}
          </div>
        </div>

        {/* Sitemap */}
        <div id="footer-sitemap-section" className="width-90">
          <p className="caption">
            Copyright © 2023 Do Duc Quan. All rights reserved.
          </p>
          <div id="footer-nav-links">
            <a href="/" className="button mid-2">
              <h2>Home</h2>
            </a>
            <a href="/about" className="button mid-2">
              <h2>About</h2>
            </a>
            <a href="/works" className="button mid-2">
              <h2>Works</h2>
            </a>
            <a href="/contact" className="button mid-2">
              <h2>Contact</h2>
            </a>
          </div>
        </div>

        {/* Name */}
        <div style={{ height: '1rem' }} />
      </div>
    </>
  );
};
