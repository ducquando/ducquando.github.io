// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import * as React from 'react';
import '../stylesheets/work.css';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';

interface WorkProps {
  icons: { [key: string]: any };
  workField: { [key: string]: any };
  workFilter: { [key: string]: any };
  allPosts: { [key: string]: any };
}

export const Work: React.FC<WorkProps> = ({
  icons,
  workField,
  workFilter,
  allPosts,
}) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [searchParams] = useSearchParams();

  let sortParams = searchParams.get('sort') || 'curated';
  let workParams: { [key: string]: boolean } = {
    se: searchParams.get('se')
      ? searchParams.get('se') == 'true'
        ? true
        : false
      : true,
    pd: searchParams.get('pd')
      ? searchParams.get('pd') == 'true'
        ? true
        : false
      : true,
    ds: searchParams.get('ds')
      ? searchParams.get('ds') == 'true'
        ? true
        : false
      : true,
    gd: searchParams.get('gd')
      ? searchParams.get('gd') == 'true'
        ? true
        : false
      : true,
  };

  function updateLink() {
    let newLink = `${location}?sort=${sortParams}`;
    ['se', 'pd', 'ds', 'gd'].forEach((key) => {
      newLink += `&${key}=${workParams[key]}`;
    });
    return newLink;
  }

  function toggleFilter(id: string) {
    workParams[id] = !workParams[id];
    navigate(updateLink());
  }

  function toggleSort(id: string) {
    sortParams = id;
    navigate(updateLink());
  }

  function FilterSection(): JSX.Element {
    return (
      <>
        {Object.entries(workField).map((params) => {
          const field = params[1];
          const isActive = workParams[field['ID']] ? ' active' : '';
          return (
            <>
              <div
                className={'filter-section' + isActive}
                id={field['ID']}
                key={field['ID']}
                onClick={() => toggleFilter(field['ID'])}
              >
                <p className="button-text">{field['Alias']}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                >
                  <path d={icons['Check']} />
                </svg>
              </div>
            </>
          );
        })}
      </>
    );
  }

  function WorksSection(): JSX.Element {
    return (
      <>
        {workFilter[sortParams]['Index'].map((id: string) => {
          const workInclude =
            ['se', 'pd', 'gd', 'ds']
              .map((e) => workParams[e] && workField[e]['PostID'].includes(id))
              .reduce((m, o) => m + o) >= 1;

          return workInclude ? (
            <>{WorkSection(id, allPosts, workField, icons)}</>
          ) : (
            <></>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div className="main-container">
        <img
          src="/assets/graphics/Works.svg"
          alt="Works"
          className="width-90"
        />
        <div id="work-container">
          <div id="tool-container" className="width-90">
            {/* Filter */}
            <div className="tool-section-about">
              <div className="tool-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="18"
                  viewBox="0 -1 15 15"
                  fill="none"
                >
                  <path d={icons['Field']} />
                </svg>
                <h2>Field</h2>
              </div>
              <div id="filter-container">{FilterSection()}</div>
            </div>

            {/* Sort */}
            <div className="tool-section-about">
              <div className="tool-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path d={icons['Sort']} />
                </svg>
                <h2>Sort</h2>
              </div>

              <ul id="sort-container">
                {['Curated', 'Name', 'Recent'].map((e) => {
                  const newID = e.toLowerCase();
                  const isActive = newID == sortParams ? ' active' : '';
                  return (
                    <>
                      <li
                        className={'sort-section' + isActive}
                        id={newID}
                        onClick={() => toggleSort(newID)}
                      >
                        <p className="button-text">{e}</p>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="divider" />

          {/* Post */}
          <div id="post-container" className="width-90">
            {WorksSection()}
          </div>
        </div>
      </div>
    </>
  );
};

export function WorkSection(
  id: string,
  posts: { [key: string]: any },
  fields: { [key: string]: any },
  icons: { [key: string]: any },
): JSX.Element {
  return (
    <>
      <a
        href={'/works' + posts[id]['Link']}
        style={{ backgroundImage: 'url(' + posts[id]['Thumbnail'] + ')' }}
        className="post-section width-30"
      >
        <div className="post-overlay" />
        <div className="post-title">
          <h3>{posts[id]['Name']}</h3>
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
            <div className="listing">
              {Object.entries(fields).map((params) => {
                const field = params[1];
                return field['PostID'].includes(id) ? (
                  <p className="caption">{field['Alias']}</p>
                ) : (
                  <></>
                );
              })}
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
              {posts[id]['Duration'] + ' (' + posts[id]['Date'] + ')'}
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
            <p className="caption">{posts[id]['Tags']}</p>
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
      </a>
    </>
  );
}

// block scripts
//   script(src="/javascripts/workFilter.js")