// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC, useState } from 'react';
import { Link } from 'react-router';
import { IconType } from '../data';
import '../stylesheets/header.css';

interface HeaderProps {
  icons: IconType;
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

  function closeMenu() {
    document.body.style.overflow = 'visible';
    setOpenSymbol('active');
    setCloseSymbol('');
    setNavView('none');
  }

  function openMenu() {
    document.body.style.overflow = 'hidden';
    setOpenSymbol('');
    setCloseSymbol('active');
    setNavView('flex');
  }

  function changeState() {
    if (openSymbol === '') {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function ItemSection() {
    return (
      <>
        {pages.map((page) => (
          <Link to={page.Link} className="button mid-1" key={page.Name}>
            <h3>{page.Name}</h3>
          </Link>
        ))}
      </>
    );
  }

  function BurgerSection() {
    return (
      <>
        {pages.map((page) => (
          <Link to={page.Link} key={page.Name} onClick={closeMenu}>
            {/* <h6 className="width-90">{page.Name}</h1> */}
            <img
              src={'./graphics/' + page.Name + '.svg'}
              alt={page.Name + ' page'}
              className="width-90"
            />
          </Link>
        ))}
      </>
    );
  }

  return (
    <>
      <nav>
        <div id="header-container" className="width-100">
          <Link to="/" id="nav-logo">
            <img src="./graphics/Header.svg" alt="Do Duc Quan's logo" />
          </Link>

          <span></span>

          {/* Desktop version */}
          <div id="nav-items">
            <ItemSection />
          </div>

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
                d={icons.HamburgerClose}
                id="burger-close"
                className={closeSymbol}
              />
              <path
                d={icons.HamburgerOpen}
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
            <BurgerSection />
          </div>
        </div>
      </nav>
    </>
  );
};
