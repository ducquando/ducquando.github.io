// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FastImage } from './image';
import '../stylesheets/home.css';
import '../stylesheets/work.css';
import { useEffect } from 'react';
import { Thumbnail } from './thumbnail';

interface HomeProps {
  title: string,
  workHighlight: string[];
  icons: { [key: string]: any };
  homeOverview: { [key: string]: any };
  aboutGen: { [key: string]: any };
  contactEmail: { [key: string]: any };
  contactLocation: { [key: string]: any };
  workPost: { [key: string]: any };
  workField: { [key: string]: any };
}

const Home: FC<HomeProps> = ({
  title,
  icons,
  homeOverview,
  aboutGen,
  contactEmail,
  contactLocation,
  workHighlight,
  workPost,
  workField,
}) => {
  useEffect(() => {
    document.title = title;
  }, []);

  function ContentSection() {
    return (
      <>
        <div className="main-container">
          <div id="thumbnail-container" className="width-100">
            <FastImage
              src={'./pictures/Thumbnail.png'}
              placeholderSrc={'./pictures/Thumbnail@0.33x.webp'}
              id="thumbnail-image"
              className="width-100"
              alt="Thumbnail hero image"
            />
            <picture style={{ position: 'absolute' }}>
              <source
                media="(max-width: 640px)"
                srcSet={`./graphics/DoDucQuan@0.5x.svg`}
                className="width-90"
              />
              <source
                media="(min-width: 641px)"
                srcSet={`./graphics/DoDucQuan.svg`}
                className="width-90"
              />
              <img
                src={`./graphics/DoDucQuan.svg`}
                alt="Do Duc Quan"
                className="width-90"
              />
            </picture>
            <div id="thumbnail-section" className="width-25">
              <p className="mid">{homeOverview['Primary']}</p>
              <h3>{homeOverview['Secondary']}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }

  function AboutSection() {
    return (
      <>
        <div className="main-section width-100">
          <div className="more-container width-90" style={{ margin: 'auto' }}>
            <h2>About</h2>
            <Link to="/about" className="button more">
              <p className="button-text">More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
              >
                <path d={icons['More']} />
              </svg>
            </Link>
          </div>
          <div id="about-container">
            <div className="width-90" style={{ margin: 'auto' }}>
              <p className="mid width-60">{aboutGen['Overview']}</p>
            </div>
            <div className="about-section width-90" style={{ margin: 'auto' }}>
              <div className="about-items general-section">
                <h4>Experience</h4>
                <p className="large-number">{aboutGen['Years']}</p>
              </div>
              <div className="about-items general-section">
                <h4>Projects</h4>
                <p className="large-number">{aboutGen['Project']}</p>
              </div>
              <div className="about-items general-section desktop">
                <h4>Happy clients</h4>
                <p className="large-number">{aboutGen['Stakeholders']}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function ContactSection() {
    return (
      <>
        <div className="main-section width-90" style={{ margin: 'auto' }}>
          <div className="more-container">
            <h2>Contact</h2>
            <Link to="/contact" className="button more">
              <p className="button-text">More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
              >
                <path d={icons['More']} />
              </svg>
            </Link>
          </div>

          <div className="width-60">
            <p className="mid">
              If you want to start a new project or have questions, feel free to
              reach out at <br />
              <span style={{ position: 'relative', left: '-0.375rem' }}>
                <Link to={'mailto:' + contactEmail['Link']} className="button">
                  {contactEmail['Details']}
                </Link>
              </span>
            </p>
          </div>
          <p>
            Based in {contactLocation.Details} <br /> Work worldwide
          </p>
        </div>
      </>
    );
  }

  function HighlightSection() {
    return (
      <>
        {workHighlight?.map((id: string) => {
          return workPost[id]['Highlight']
            ? <Thumbnail id={id} posts={workPost} fields={workField} icons={icons} />
            : <></>
        })}
      </>
    );
  }

  function WorkSection() {
    return (
      <>
        <div className="main-section width-90" style={{ margin: 'auto' }}>
          <div className="more-container">
            <h2>Featured works</h2>
            <Link to="/works" className="button more">
              <p className="button-text">More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
              >
                <path d={icons['More']} />
              </svg>
            </Link>
          </div>

          <div id="post-container" className="width-90">
            {HighlightSection()}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {ContentSection()}

      {AboutSection()}
      <div className="divider" />

      {/* Works section */}
      {WorkSection()}
      <div className="divider" />

      {/* Contact section */}
      {ContactSection()}
    </>
  );
};

export default Home;
