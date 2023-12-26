import * as React from 'react';
import { useState } from 'react';
import '../stylesheets/header.css';

interface HeaderProps {
  icons: { [key: string]: any };
}

export const Header: React.FC<HeaderProps> = ({ icons }) => {
  // Change states
  const [openSymbol, setOpenSymbol] = useState('block');
  const [closeSymbol, setCloseSymbol] = useState('none');
  const [navView, setNavView] = useState('none');

  const pages = [
    { Link: '/', Name: 'Home' },
    { Link: '/about', Name: 'About' },
    { Link: '/works', Name: 'Works' },
    { Link: '/contact', Name: 'Contact' },
  ];

  function changeState() {
    if (openSymbol == 'none') {
      // $('body').css('overflow-y', 'visible');
      setOpenSymbol('block');
      setCloseSymbol('none');
      setNavView('none');
    } else {
      // $('body').css('overflow-y', 'hidden');
      setOpenSymbol('none');
      setCloseSymbol('block');
      setNavView('flex');
    }
  }

  function ItemSection(): JSX.Element {
    return (
      <>
        {pages?.map((page: { [key: string]: any }) => {
          return (
            <a href={page['Link']} className="button mid-1" key={page['Name']}>
              <h2>{page['Name']}</h2>
            </a>
          );
        })}
      </>
    );
  }

  function BurgerSection(): JSX.Element {
    return (
      <>
        {pages?.map((page: { [key: string]: any }) => {
          return (
            <a href={page['Link']} key={page['Name']}>
              <img
                src={'/assets/graphics/' + page['Name'] + '.svg'}
                alt={page['Name'] + ' page'}
                className="width-90"
              />
            </a>
          );
        })}
      </>
    );
  }

  return (
    <>
      <nav>
        <div id="header-container" className="width-100">
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
                display={closeSymbol}
              />
              <path
                d={icons['HamburgerOpen']}
                id="burger-open"
                display={openSymbol}
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
