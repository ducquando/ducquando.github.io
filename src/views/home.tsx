// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import * as React from 'react';
import '../stylesheets/home.css';
import '../stylesheets/work.css';

interface HomeProps {
  workHighlight: string[];
  icons: { [key: string]: any };
  aboutGen: { [key: string]: any };
  contactEmail: { [key: string]: any };
  workPost: { [key: string]: any };
  workField: { [key: string]: any };
}

export const Home: React.FC<HomeProps> = ({
  icons,
  aboutGen,
  contactEmail,
  workHighlight,
  workPost,
  workField,
}) => {
  function ContentSection(): JSX.Element {
    return (
      <>
        <div className="main-container">
          <div
            id="thumbnail-container"
            className="width-100"
            style={{
              backgroundImage:
                "image-set('../assets/pictures/Thumbnail.png' 1x, '../assets/pictures/Thumbnail@0.33x.png' 0.33x, '../assets/pictures/Thumbnail@0.5x.png' 0.5x, '../assets/pictures/Thumbnail@2x.png' 2x)",
            }}
          >
            <picture className="width-90">
              <source
                media="(max-width: 640px)"
                srcSet={`../assets/graphics/DoDucQuan@0.5x.svg`}
              />
              <source
                media="(min-width: 641px)"
                srcSet={`../assets/graphics/DoDucQuan.svg`}
              />
              <img src={`../assets/graphics/DoDucQuan.svg`} alt="Do Duc Quan" />
            </picture>
            <div id="thumbnail-section" className="width-25">
              <p className="mid">
                Computer intelligence fuels my visual creations
              </p>
              <h2>I am QUAN. Welcome to my site 👋</h2>
            </div>
          </div>
        </div>
      </>
    );
  }

  function AboutSection(): JSX.Element {
    return (
      <>
        <div className="main-section width-100">
          <div className="more-container width-90" style={{ margin: 'auto' }}>
            <h1>About</h1>
            <a href="/about" className="button more">
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
            </a>
          </div>
          <div id="about-container">
            <div className="width-90" style={{ margin: 'auto' }}>
              <p className="mid width-60">
                Quan is a creative UX engineer with 5 years of experience in
                developing and designing innovative solutions.
              </p>
            </div>
            <div className="about-section width-90" style={{ margin: 'auto' }}>
              <div className="about-items general-section">
                <h3>Experience</h3>
                <p className="large-number">{aboutGen['Years']}</p>
              </div>
              <div className="about-items general-section">
                <h3>Projects</h3>
                <p className="large-number">{aboutGen['Project']}</p>
              </div>
              <div className="about-items general-section desktop">
                <h3>Happy clients</h3>
                <p className="large-number">{aboutGen['Stakeholders']}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function ContactSection(): JSX.Element {
    return (
      <>
        <div className="main-section width-90" style={{ margin: 'auto' }}>
          <div className="more-container">
            <h1>Contact</h1>
            <a href="/contact" className="button more">
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
            </a>
          </div>

          <div className="width-60">
            <p className="mid">
              If you want to start a new project or have questions, feel free to
              reach out at
              <span style={{ position: 'relative', left: '-0.375rem' }}>
                <a href={'mailto:' + contactEmail['Link']} className="button">
                  {contactEmail['Details']}
                </a>
              </span>
            </p>
          </div>
          <p>
            Based in Ho Chi Minh City, Vietnam <br /> Work worldwide
          </p>
        </div>
      </>
    );
  }

  function HighlightHelper(id: string): JSX.Element {
    return (
      <>
        {Object.entries(workField).map((fields: { [key: string]: any }) => {
          const field = fields[1];

          return field['PostID'].includes(id) ? (
            <p className="caption" key={field['ID'] + id}>
              {field['Alias']}
            </p>
          ) : (
            <></>
          );
        })}
      </>
    );
  }

  function HighlightSection(): JSX.Element {
    return (
      <>
        {workHighlight?.map((id: string) => {
          return workPost[id]['Highlight'] ? (
            <>
              <a href={'/works' + workPost[id]['Link']} key={workPost[id]}>
                <div
                  style={{
                    backgroundImage: 'url(' + workPost[id]['Thumbnail'] + ')',
                  }}
                  className="post-section width-30"
                >
                  <div className="post-overlay" />
                  <div className="post-title">
                    <h3>{workPost[id]['Name']}</h3>
                    <div className="post-items">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path d={icons['Field']} />
                      </svg>
                      <div className="listing" style={{ display: 'flex' }}>
                        {HighlightHelper(id)}
                      </div>
                    </div>
                    <div className="post-items">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                      >
                        <path d={icons['Calendar']} />
                      </svg>
                      <p className="caption">
                        {workPost[id]['Duration'] +
                          ' (' +
                          workPost[id]['Date'] +
                          ')'}
                      </p>
                    </div>
                    <div className="post-items">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path d={icons['Tag']} />
                      </svg>
                      <p className="caption">{workPost[id]['Tags']}</p>
                    </div>
                  </div>

                  <div className="post-view">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path d={icons['Eye']} />
                    </svg>
                    <p className="button-text">View project</p>
                  </div>
                </div>
              </a>
            </>
          ) : (
            <></>
          );
        })}
      </>
    );
  }

  function WorkSection(): JSX.Element {
    return (
      <>
        <div className="main-section width-90" style={{ margin: 'auto' }}>
          <div className="more-container">
            <h1>Featured works</h1>
            <a href="/works" className="button more">
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
            </a>
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
