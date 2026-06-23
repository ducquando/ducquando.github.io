// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/header.css';

interface HeaderProps {
  icons: { [key: string]: any };
}

export const Header: FC<HeaderProps> = ({ icons }) => {
  // Change states
  const [openSymbol, setOpenSymbol] = useState('active');
  const [closeSymbol, setCloseSymbol] = useState('');
  const [navView, setNavView] = useState('none');

  const pages = [
    { Link: '/', Name: 'Home' },
    { Link: '/about', Name: 'About' },
    { Link: '/works', Name: 'Works' },
    { Link: '/contact', Name: 'Contact' },
  ];

  function changeState() {
    if (openSymbol == '') {
      document.body.style.overflow = 'visible';
      setOpenSymbol('active');
      setCloseSymbol('');
      setNavView('none');
    } else {
      document.body.style.overflow = 'hidden';
      setOpenSymbol('');
      setCloseSymbol('active');
      setNavView('flex');
    }
  }

  function ItemSection() {
    return (
      <>
        {pages?.map((page: { [key: string]: any }) => {
          return (
            <Link to={page['Link']} className="button mid-1" key={page['Name']}>
              <h2>{page['Name']}</h2>
            </Link>
          );
        })}
      </>
    );
  }

  function BurgerSection() {
    return (
      <>
        {pages?.map((page: { [key: string]: any }) => {
          return (
            <Link to={page['Link']} key={page['Name']}>
              <img
                src={'/graphics/' + page['Name'] + '.svg'}
                alt={page['Name'] + ' page'}
                className="width-90"
              />
            </Link>
          );
        })}
      </>
    );
  }

  return (
    <>
      <nav>
        <div id="header-container" className="width-100">
          <Link to="/" id="nav-logo">
            <img src="/graphics/Header.svg" alt="Do Duc Quan's logo" />
          </Link>

          <span></span>

          {/* Desktop version */}
          <div id="nav-items">{ItemSection()}</div>

          {/* Mobile version */}
          <div id="nav-burger" onClick={changeState}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d={icons['HamburgerClose']}
                id="burger-close"
                className={closeSymbol}
              />
              <path
                d={icons['HamburgerOpen']}
                id="burger-open"
                className={openSymbol}
              />
            </svg>
          </div>
        </div>

        <div id="nav-container" className="width-100">
          <div
            id="nav-mobile"
            className="width-100"
            style={{ display: navView }}
          >
            {BurgerSection()}
          </div>
        </div>
      </nav>
    </>
  );
};
