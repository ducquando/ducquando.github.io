// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC, useEffect, useRef, useState } from 'react';
import { Navigate, Link, useParams } from 'react-router';
import { FastImage } from './image';
import { Thumbnail } from './thumbnail';
import { FieldEnum, FieldWorkType, IconType, PostWorkType, WorkEnum } from '../data';
import '../stylesheets/post.css';
import '../stylesheets/home.css';
import '../stylesheets/work.css';

interface PostProps {
  workField: FieldWorkType;
  allPosts: PostWorkType;
  icons: IconType;
}

const Post: FC<PostProps> = ({ 
  icons, 
  workField, 
  allPosts 
}) => {
  const { workID } = useParams();
  const scrollRef = useRef<HTMLInputElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [subHeader, setSubHeader] = useState('none');

  if ( !workID || allPosts[workID as WorkEnum] == undefined) {
    return <Navigate to="/404" replace />;
  }

  const fields: FieldEnum[] = ['se', 'pd', 'gd', 'ds']
  const filtering = fields
    .map((e) => e + '=' + workField[e].PostID.includes(workID as WorkEnum))
    .reduce((m, o) => m + '&' + o);
  const workPost = allPosts[workID as WorkEnum];
  const title = workPost.Name + ': ' + workPost.Subtitle;

  useEffect(() => {
    document.title = title;

    // Stick the subheader to the page
    const stickyHeader = () => {
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

  function ContentSection() {
    return (
      <>
        {workPost.Content.map((content, id) => {
          return (
            <div className="content-section width-90" key={id}>
              {content.map((subcontent, index) => {
                return subcontent.Type == 'h1' ? (
                  <h3
                    className={subcontent.Style + ' content-heading'}
                    key={index}
                  >
                    {subcontent.Details}
                  </h3>
                ) : subcontent.Type == 'p' ? (
                  <p
                    className={subcontent.Style}
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: subcontent.Details,
                    }}
                  />
                ) : subcontent.Type == 'img-responsive' ? (
                  <picture key={index}>
                    <source
                      media="(max-width: 640px)"
                      srcSet={`./pictures/post/${subcontent.Source}@0.5x${subcontent.Format}`}
                      onError={(e) => {
                        const target = e.target as HTMLSourceElement;
                        target.src = `./pictures/post/${subcontent.Source}${subcontent.Format}`;
                      }}
                      className={subcontent.Style}
                    />
                    <source
                      media="(min-width: 641px)"
                      srcSet={`./pictures/post/${subcontent.Source}${subcontent.Format}`}
                      className={subcontent.Style}
                    />
                    <img
                      src={`./pictures/post/${subcontent.Source}${subcontent.Format}`}
                      className={subcontent.Style}
                      alt={subcontent.Caption}
                    />
                  </picture>
                ) : subcontent.Type == 'img' ? (
                  <FastImage
                    src={`./pictures/post/${subcontent.Source}${subcontent.Format}`}
                    placeholderSrc={`./pictures/post/${subcontent.Source}@0.33x.webp`}
                    className={subcontent.Style}
                    alt={subcontent.Caption}
                  />
                ) : (
                  <div className="divider" key={index} />
                );
              })}
            </div>
          )
        })}
      </>
    );
  }

  function PostsSection() {
    return (
      <>
        {workPost.Similar.map((id: WorkEnum) => <Thumbnail id={id} posts={allPosts} fields={workField} icons={icons} />)}
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
            {workPost.CTA ? (
              <div className="metadata-section">
                <h4 className="metadata-items">{title}</h4>
                <Link to={workPost.CTA.Link} className="button">
                  <p>{workPost.CTA.Text}</p>
                </Link>
              </div>
            ) : (
              <h4 className="metadata-items">{title}</h4>
            )}
          </div>

          {/* Mobile */}
          <div
            className="metadata-container mobile"
            style={{ maxWidth: '50vw' }}
          >
            <h4 className="metadata-items">{title}</h4>
          </div>
          {workPost.CTA && (
            <div className="metadata-section mobile">
              <Link to={workPost.CTA.Link} className="button">
                <p>{workPost.CTA.Text}</p>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Post */}
      <div className="main-container">
        {/* Title */}
        <h5 id="heading-section" className='width-90'>{workPost.Name}:</h5>
        <h1 id="heading-section" className='width-90'>{workPost.Subtitle}</h1>

        {/* Metadata */}
        <div id="title-section" className="width-90" ref={scrollRef}>
          {/* Desktop */}
          <div className="metadata-container desktop">
            <div className="metadata-section">
              <h4>Duration</h4>
              <p>{workPost.Duration}, {workPost.Date}</p>
            </div>
            <div className="metadata-section">
              <h4>Role</h4>
              <p>{workPost.Role}</p>
            </div>
            {workPost.CTA && (
              <div className="metadata-section ">
                <h4 className="metadata-items">Project</h4>
                <Link to={workPost.CTA.Link} className="button">
                  <p>{workPost.CTA.Text}</p>
                </Link>
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
                  <path d={icons.CalendarFill} />
                </svg>
                <p>{workPost.Duration + ' (' + workPost.Date + ')'}</p>
              </div>
              <div className="mobile-section">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path d={icons.Role} />
                </svg>
                <p>{workPost.Role}</p>
              </div>
            </div>
            {workPost.CTA && (
              <div className="mobile-section">
                <Link to={workPost.CTA.Link} className="button">
                  <p>{workPost.CTA.Text}</p>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div id="content-container" className="width-90">
          <ContentSection />
        </div>

        {/* CTA */}
        {workPost.CTA && (
          <div id="cta-button" className="width-90">
            <h2>{title}</h2>
            <Link to={workPost.CTA.Link} className="button large">
              <p>{workPost.CTA.Text}</p>
            </Link>
          </div>
        )}

        {/* Similar */}
        <div className="divider" />
        <div className="main-section width-90">
          <div className="more-container">
            <h2>More like this </h2>
            <Link to={'/works?' + filtering} className="button more">
              <p className="button-text">More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
              >
                <path d={icons.More} />
              </svg>
            </Link>
          </div>
          <div id="post-container" className="width-90">
            <PostsSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
