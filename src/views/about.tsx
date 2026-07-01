// Do Duc Quan's Personal Website
// GNL General Public License v3
// Copyright (c) Do Duc Quan. All rights reserved.

import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FastImage } from './image';
import { ExperienceAboutType, JourneyAboutType, OtherAboutType, SkillAboutType } from '../data';
import '../stylesheets/about.css';

interface AboutProps {
  title: string;
  aboutJourney: JourneyAboutType[];
  aboutExp: ExperienceAboutType[];
  aboutDetails: OtherAboutType;
  aboutFuture: OtherAboutType;
}

const About: FC<AboutProps> = ({
  title,
  aboutJourney,
  aboutExp,
  aboutDetails,
  aboutFuture,
}) => {
  useEffect(() => {
    document.title = title;
  }, []);

  function JourneySection() {
    return (
      <>
        {aboutJourney.map((journey) => {
          return (
            <>
              <div className="journey-section width-20" key={journey.Year}>
                <p className="large">{journey.Year}</p>
                <p>{journey.Description}</p>
                <FastImage
                  src={`${journey.Image}${journey.Format}`}
                  placeholderSrc={`${journey.Image}@0.33x.webp`}
                  className={journey.Landspace ? 'landscape' : 'portrait'}
                  alt={journey.Year}
                  leftOffset={journey.HorizontalOffset}
                  topOffset={journey.VerticalOffset}
                />
              </div>
            </>
          );
        })}
      </>
    );
  }

  function ExperienceStats(type: string, data: string) {
    return (
      <>
        <div className="stats-section">
          <h4>{type}</h4>
          <p className="large-number">{data}</p>
        </div>
      </>
    );
  }

  function ExperienceTools(tools: SkillAboutType[]) {
    return (
      <>
        {tools.map((tool) => {
          return (
            <>
              <div className="tool-items" key={tool.SkillName}>
                <img
                  src={tool.Image + tool.Format}
                  alt={tool.SkillName}
                />
                <p>{tool.SkillName}</p>
              </div>
            </>
          );
        })}
      </>
    );
  }

  function ExperienceSection() {
    return (
      <>
        {aboutExp.map((exp) => {
          return (
            <>
              <div className="experience-section" id={exp.Name} key={exp.Name}>
                <div className="description-container width-30">
                  {/* Heading */}
                  <h3>{exp.Name}</h3>
                  <p dangerouslySetInnerHTML={{ __html: exp.Description }} />

                  {/* Statistics */}
                  <div className="stats-container">
                    {ExperienceStats('Years', exp.Years)}
                    {ExperienceStats('Projects', exp.Project)}
                  </div>

                  {/* Tools & skills */}
                  <div className="tool-container">
                    <h4>Tools and skills</h4>
                    <div className="tool-section-about">
                      {ExperienceTools(exp.Skills)}
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
                    src={`${exp.Thumbnail}${exp.Format}`}
                    placeholderSrc={`${exp.Thumbnail}@0.33x.webp`}
                    className="width-60"
                    alt={exp.Name}
                  />
                  <Link to={exp.CTA} className="button large width-60">
                    <p className="button-text">{`View ${exp.Name} works`}</p>
                  </Link>
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
        <h1 className='width-90'>About</h1>
        <div className="width-90">
          <p className="mid width-60">
            {aboutDetails.Primary}
            <br />
            <br />
            {aboutDetails.Secondary}
          </p>
        </div>
        <div className="divider"></div>

        {/* Journey section */}
        <div className="about-container width-90">
          <h2>Journey</h2>
          <div id="journey-container">{JourneySection()}</div>
        </div>
        <div className="divider"></div>

        {/* Experience section */}
        <div className="about-container width-90">
          <h2>Experience</h2>
          <div id="experience-container">{ExperienceSection()}</div>
        </div>
        <div className="divider"></div>

        {/* Future section */}
        <div className="about-container width-90">
          <h2>Future Direction</h2>
          <div className="width-90">
            <p className="width-60">
              {aboutFuture.Primary}
              <br />
              <br />
              {aboutFuture.Secondary}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
