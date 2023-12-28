// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { WorkSection } from './work';
import '../stylesheets/post.css';
import '../stylesheets/home.css';
import '../stylesheets/work.css';

interface PostProps {
  workField: { [key: string]: any };
  allPosts: { [key: string]: any };
  icons: { [key: string]: any };
}

export const Post: React.FC<PostProps> = ({ icons, workField, allPosts }) => {
  let { workID } = useParams();
  const scrollRef = useRef<HTMLInputElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [subHeader, setSubHeader] = useState('none');

  if (workID == undefined || allPosts[workID] == undefined) {
    return <Navigate to="/404" replace />;
  }

  const filtering = ['se', 'pd', 'gd', 'ds']
    .map((e) => e + '=' + workField[e]['PostID'].includes(workID))
    .reduce((m, o) => m + '&' + o);
  const workPost = allPosts[workID];
  const title = workPost['Name'];

  useEffect(() => {
    document.title = title;

    // Stick the subheader to the page
    const stickyHeader = (event: Event) => {
      const offetSticky = convertRemToPixels(4.5);
      let position = scrollTop;

      if (scrollRef.current) {
        position = scrollRef.current.getBoundingClientRect().top;
        setScrollTop(scrollRef.current.getBoundingClientRect().top);
      }

      if (position < offetSticky) {
        setSubHeader('flex');
      } else {
        setSubHeader('none');
      }
    };

    window.addEventListener('scroll', stickyHeader);

    return () => {
      window.removeEventListener('scroll', stickyHeader);
    };
  }, []);

  function convertRemToPixels(rem: number) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  function ContentSection(): JSX.Element {
    return (
      <>
        {workPost['Content']?.map(
          (content: { [key: string]: any }[], index: number) => {
            return (
              <div className="content-section width-90" key={index}>
                {content?.map((subcontent, index) => {
                  return subcontent['Type'] == 'h1' ? (
                    <h2
                      className={subcontent['Style'] + ' content-heading'}
                      key={index}
                    >
                      {subcontent['Details']}
                    </h2>
                  ) : subcontent['Type'] == 'p' ? (
                    <p
                      className={subcontent['Style']}
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: subcontent['Details'],
                      }}
                    />
                  ) : subcontent['Type'] == 'img-responsive' ? (
                    <picture key={index}>
                      <source
                        media="(max-width: 640px)"
                        srcSet={`../assets/pictures/post/${subcontent['Source']}@0.5x${subcontent['Format']}`}
                        onError={(e) => {
                          const target = e.target as HTMLSourceElement;
                          target.src = `../assets/pictures/post/${subcontent['Source']}${subcontent['Format']}`;
                        }}
                        className={subcontent['Style']}
                      />
                      <source
                        media="(min-width: 641px)"
                        srcSet={`../assets/pictures/post/${subcontent['Source']}${subcontent['Format']}`}
                        className={subcontent['Style']}
                      />
                      <img
                        src={`../assets/pictures/post/${subcontent['Source']}${subcontent['Format']}`}
                        className={subcontent['Style']}
                        alt={subcontent['Caption']}
                      />
                    </picture>
                  ) : subcontent['Type'] == 'img' ? (
                    <img
                      src={`../assets/pictures/post/${subcontent['Source']}${subcontent['Format']}`}
                      alt={subcontent['Caption']}
                      className={subcontent['Style']}
                      key={index}
                    />
                  ) : (
                    <div className="divider" key={index} />
                  );
                })}
              </div>
            );
          },
        )}
      </>
    );
  }

  function PostsSection(): JSX.Element {
    return (
      <>
        {workPost['Similar'].map((id: string) => {
          return <>{WorkSection(id, allPosts, workField, icons)}</>;
        })}
      </>
    );
  }

  return (
    <>
      {/* Metadata */}
      <div
        id="title-container"
        className="width-100"
        style={{ display: subHeader }}
      >
        <div className="width-90">
          {/* Desktop */}
          <div className="metadata-container desktop">
            {workPost['Source'] ? (
              <div className="metadata-section">
                <h3 className="metadata-items">{workPost['Name']}</h3>
                <a href={workPost['Source']} className="button">
                  <p>View report</p>
                </a>
              </div>
            ) : (
              <h3 className="metadata-items">{workPost['Name']}</h3>
            )}
          </div>

          {/* Mobile */}
          <div
            className="metadata-container mobile"
            style={{ maxWidth: '50vw' }}
          >
            <h3 className="metadata-items">{workPost['Name']}</h3>
          </div>
          {workPost['Source'] && (
            <div className="metadata-section mobile">
              <a href={workPost['Source']} className="button">
                <p>View report</p>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Post */}
      <div className="main-container">
        {/* Title */}
        <div id="heading-section" className="width-90">
          <picture className="width-90">
            <source
              media="(max-width: 640px)"
              srcSet={`../assets/graphics/${workPost['Title']}@0.5x.svg`}
            />
            <source
              media="(min-width: 641px)"
              srcSet={`../assets/graphics/${workPost['Title']}.svg`}
            />
            <img
              src={`../assets/graphics/${workPost['Title']}.svg`}
              alt={title}
            />
          </picture>
        </div>

        {/* Metadata */}
        <div id="title-section" className="width-90" ref={scrollRef}>
          {/* Desktop */}
          <div className="metadata-container desktop">
            <div className="metadata-section">
              <h3>Duration</h3>
              <p>{workPost['Duration'] + ' (' + workPost['Date'] + ')'}</p>
            </div>
            <div className="metadata-section">
              <h3>Role</h3>
              <p>{workPost['Role']}</p>
            </div>
            {workPost['Source'] && (
              <div className="metadata-section ">
                <h3 className="metadata-items">Project</h3>
                <a href={workPost['Source']} className="button">
                  <p>View report</p>
                </a>
              </div>
            )}
          </div>

          {/* Mobile */}
          <div id="mobile-container" className="mobile">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
              }}
            >
              <div className="mobile-section">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                >
                  <path d={icons['CalendarFill']} />
                </svg>
                <p>{workPost['Duration'] + ' (' + workPost['Date'] + ')'}</p>
              </div>
              <div className="mobile-section">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path d={icons['Role']} />
                </svg>
                <p>{workPost['Role']}</p>
              </div>
            </div>
            {workPost['Source'] && (
              <div className="mobile-section">
                <a href={workPost['Source']} className="button">
                  <p>View project</p>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div id="content-container" className="width-90">
          {ContentSection()}
        </div>

        {/* CTA */}
        {workPost['Source'] && (
          <div id="cta-button" className="width-90">
            <h1>{workPost['Name']}</h1>
            <a href={workPost['Source']} className="button large">
              <p>View report</p>
            </a>
          </div>
        )}
        {workPost['Similar'].length != 0 && (
          <>
            <div className="divider" />
            <div className="main-section width-90">
              <div className="more-container">
                <h1>More like this </h1>
                <a href={'/works?' + filtering} className="button more">
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
                {PostsSection()}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
