// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import * as React from 'react';
import { useEffect } from 'react';
import '../stylesheets/about.css';
import { FastImage } from './image';

interface AboutProps {
  title: string;
  aboutJourney: { [key: string]: any }[];
  aboutExp: { [key: string]: any }[];
  aboutDetails: { [key: string]: any };
  aboutFuture: { [key: string]: any };
}

export const About: React.FC<AboutProps> = ({
  title,
  aboutJourney,
  aboutExp,
  aboutDetails,
  aboutFuture,
}) => {
  useEffect(() => {
    document.title = title;
  }, []);

  function JourneySection(): JSX.Element {
    return (
      <>
        {aboutJourney?.map((journey: { [key: string]: any }) => {
          return (
            <>
              <div className="journey-section width-20" key={journey['Year']}>
                <p className="large">{journey['Year']}</p>
                <p>{journey['Description']}</p>
                <FastImage
                  src={`${journey['Image']}${journey['Format']}`}
                  placeholderSrc={`${journey['Image']}@0.33x.webp`}
                  className={journey['Landspace'] ? 'landscape' : 'portrait'}
                  alt={journey['Year']}
                  style={`left: ${journey['HorizontalOffset']}rem; top: ${journey['VerticalOffset']}rem`}
                />
              </div>
            </>
          );
        })}
      </>
    );
  }

  function ExperienceStats(type: string, data: string): JSX.Element {
    return (
      <>
        <div className="stats-section">
          <h3>{type}</h3>
          <p className="large-number">{data}</p>
        </div>
      </>
    );
  }

  function ExperienceTools(tools: { [key: string]: any }[]): JSX.Element {
    return (
      <>
        {tools?.map((tool: { [key: string]: any }) => {
          return (
            <>
              <div className="tool-items" key={tool['SkillName']}>
                <img
                  src={tool['Image'] + tool['Format']}
                  alt={tool['SkillName']}
                />
                <p>{tool['SkillName']}</p>
              </div>
            </>
          );
        })}
      </>
    );
  }

  function ExperienceSection(): JSX.Element {
    return (
      <>
        {aboutExp?.map((exp: { [key: string]: any }) => {
          return (
            <>
              <div className="experience-section" id={exp['Name']}>
                <div className="description-container width-30">
                  {/* Heading */}
                  <h2>{exp['Name']}</h2>
                  <p dangerouslySetInnerHTML={{ __html: exp['Description'] }} />

                  {/* Statistics */}
                  <div className="stats-container">
                    {ExperienceStats('Years', exp['Years'])}
                    {ExperienceStats('Projects', exp['Project'])}
                  </div>

                  {/* Tools & skills */}
                  <div className="tool-container">
                    <h3>Tools and skills</h3>
                    <div className="tool-section-about">
                      {ExperienceTools(exp['Skills'])}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    gap: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <FastImage
                    src={`${exp['Thumbnail']}${exp['Format']}`}
                    placeholderSrc={`${exp['Thumbnail']}@0.33x.webp`}
                    className="width-60"
                    alt={exp['Name']}
                  />
                  <a href={exp['CTA']} className="button large width-60">
                    <p className="button-text">{`View ${exp['Name']} works`}</p>
                  </a>
                </div>
              </div>
              <div className="divider"></div>
            </>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div className="main-container" id="about-page">
        {/* Intro section */}
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet={`../assets/graphics/About@0.5x.svg`}
            className="width-90"
          />
          <source
            media="(min-width: 641px)"
            srcSet={`../assets/graphics/About.svg`}
            className="width-90"
          />
          <img
            src={`../assets/graphics/About.svg`}
            alt="About"
            className="width-90"
          />
        </picture>
        <div className="width-90">
          <p className="mid width-60">
            {aboutDetails['Primary']}
            <br />
            <br />
            {aboutDetails['Secondary']}
          </p>
        </div>
        <div className="divider"></div>

        {/* Journey section */}
        <div className="about-container width-90">
          <h1>Journey</h1>
          <div id="journey-container">{JourneySection()}</div>
        </div>
        <div className="divider"></div>

        {/* Experience section */}
        <div className="about-container width-90">
          <h1>Experience</h1>
          <div id="experience-container">{ExperienceSection()}</div>
        </div>
        <div className="divider"></div>

        {/* Future section */}
        <div className="about-container width-90">
          <h1>Future Direction</h1>
          <div className="width-90">
            <p className="width-60">
              {aboutFuture['Primary']}
              <br />
              <br />
              {aboutFuture['Secondary']}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
