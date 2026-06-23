// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Thumbnail } from './thumbnail';
import '../stylesheets/work.css';

interface WorkProps {
  title: string,
  workField: { [key: string]: any };
  workFilter: { [key: string]: any };
  allPosts: { [key: string]: any };
  icons: { [key: string]: any };
}

const Work: FC<WorkProps> = ({
  title,
  workField,
  workFilter,
  allPosts,
  icons,
}) => {
  useEffect(() => {
    document.title = title;
  }, []);

  const [searchParams] = useSearchParams();
  const [paramSort, setParamSort] = useState(
    searchParams.get('sort') ?? 'default',
  );
  const [paramSE, setParamSE] = useState(
    (searchParams.get('se') && searchParams.get('se') == 'true') ?? true,
  );
  const [paramPD, setParamPD] = useState(
    (searchParams.get('pd') && searchParams.get('pd') == 'true') ?? true,
  );
  const [paramDS, setParamDS] = useState(
    (searchParams.get('ds') && searchParams.get('ds') == 'true') ?? true,
  );
  const [paramGD, setParamGD] = useState(
    (searchParams.get('gd') && searchParams.get('gd') == 'true') ?? true,
  );

  function toggleFilter(id: string) {
    if (id == 'se') setParamSE(!paramSE);
    else if (id == 'pd') setParamPD(!paramPD);
    else if (id == 'gd') setParamGD(!paramGD);
    else if (id == 'ds') setParamDS(!paramDS);
  }

  function toggleSort(id: string) {
    setParamSort(id);
  }

  function FilterSection() {
    return (
      <>
        {Object.entries(workField).map((params) => {
          const field = params[1];
          const isActive =
            field['ID'] == 'se' && paramSE
              ? ' active'
              : field['ID'] == 'pd' && paramPD
              ? ' active'
              : field['ID'] == 'gd' && paramGD
              ? ' active'
              : field['ID'] == 'ds' && paramDS
              ? ' active'
              : '';

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

  function ThumbnailsSection() {
    return (
      <>
        {workFilter[paramSort]['Index'].map((id: string) => {
          const workInclude =
            Object.entries({
              se: paramSE,
              pd: paramPD,
              gd: paramGD,
              ds: paramDS,
            })
              .map(
                (field) =>
                  field[1] && workField[field[0]]['PostID'].includes(id),
              )
              .reduce((m, o) => m + o) >= 1;

          return workInclude ? (
            <Thumbnail id={id} posts={allPosts} fields={workField} icons={icons} />
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
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet={`/graphics/Works@0.5x.svg`}
            className="width-90"
          />
          <source
            media="(min-width: 641px)"
            srcSet={`/graphics/Works.svg`}
            className="width-90"
          />
          <img
            src={`/graphics/Works.svg`}
            alt="Works"
            className="width-90"
          />
        </picture>
        <div id="work-container">
          <div id="tool-container" className="width-90">
            {/* Filter */}
            <div className="tool-section-work">
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
                <h2>Filter</h2>
              </div>
              <div id="filter-container">{FilterSection()}</div>
            </div>

            {/* Sort */}
            <div className="tool-section-work">
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
                <h2>Sort by</h2>
              </div>

              <ul id="sort-container">
                {['Default', 'Name', 'Date'].map((e) => {
                  const newID = e.toLowerCase();
                  const isActive = newID == paramSort ? ' active' : '';
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

          <div id="post-container" className="width-90">
            {ThumbnailsSection()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
