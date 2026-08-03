// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Thumbnail } from './thumbnail';
import { FieldEnum, FieldWorkType, FilterEnum, FilterWorkType, IconType, PostWorkType, WorkEnum } from '../data';
import '../stylesheets/work.css';

interface WorkProps {
  title: string,
  workField: FieldWorkType;
  workFilter: FilterWorkType;
  allPosts: PostWorkType;
  icons: IconType;
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
  const [paramSort, setParamSort] = useState<FilterEnum>(
    searchParams.get('sort') as FilterEnum ?? 'default',
  );
  const [paramSE, setParamSE] = useState<boolean>(
    searchParams.get('se') ? searchParams.get('se') === 'true' : true
  );
  const [paramPD, setParamPD] = useState<boolean>(
    searchParams.get('pd') ? searchParams.get('pd') === 'true' : true
  );
  const [paramDS, setParamDS] = useState<boolean>(
    searchParams.get('ds') ? searchParams.get('ds') === 'true' : true
  );
  const [paramGD, setParamGD] = useState<boolean>(
    searchParams.get('gd') ? searchParams.get('gd') === 'true' : true
  );

  const sortOptions: { label: string; id: FilterEnum }[] = [
    { label: 'Default', id: 'default' },
    { label: 'Name', id: 'name' },
    { label: 'Date', id: 'date' },
  ];

  function toggleFilter(id: string) {
    if (id == 'se') setParamSE(!paramSE);
    else if (id == 'pd') setParamPD(!paramPD);
    else if (id == 'gd') setParamGD(!paramGD);
    else if (id == 'ds') setParamDS(!paramDS);
  }

  function toggleSort(id: FilterEnum) {
    setParamSort(id);
  }

  function FilterSection() {
    return (
      <>
        {Object.entries(workField).map((params) => {
          const field = params[1];
          const isActive =
            field.ID == 'se' && paramSE
              ? ' active'
              : field.ID == 'pd' && paramPD
              ? ' active'
              : field.ID == 'gd' && paramGD
              ? ' active'
              : field.ID == 'ds' && paramDS
              ? ' active'
              : '';

          return (
            <>
              <div
                className={'filter-section' + isActive}
                id={field.ID}
                key={field.ID}
                onClick={() => toggleFilter(field.ID)}
              >
                <p className="button-text">{field.Alias}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                >
                  <path d={icons.Check} />
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
        {workFilter[paramSort].Index.map((id: WorkEnum) => {
          const activeFilters: [FieldEnum, boolean][] = [['se', paramSE], ['pd', paramPD], ['gd', paramGD], ['ds', paramDS]] as const;
          const workInclude = activeFilters.some(([field, enabled]) => enabled && workField[field].PostID.includes(id));

          return workInclude 
            ? <Thumbnail id={id} posts={allPosts} fields={workField} icons={icons} /> 
            : <></>;
        })}
      </>
    );
  }

  return (
    <>
      <div className="main-container">
        <h1 className='width-90'>Works</h1>
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
                  <path d={icons.Field} />
                </svg>
                <h3>Filter</h3>
              </div>
              <div id="filter-container">
                <FilterSection />
              </div>
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
                  <path d={icons.Sort} />
                </svg>
                <h3>Sort by</h3>
              </div>

              <ul id="sort-container">
                {sortOptions.map(({ label, id }) => (
                  <li
                    key={id}
                    className={`sort-section${id === paramSort ? ' active' : ''}`}
                    id={id}
                    onClick={() => toggleSort(id)}
                  >
                    <p className="button-text">{label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="divider" />

          <div id="post-container" className="width-90">
            <ThumbnailsSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
