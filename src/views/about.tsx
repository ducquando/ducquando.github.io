import * as React from 'react';
import '../../stylesheets/about.css';
import '../javascripts/aboutScroll.js';

interface AboutProps {
  title: string;
  aboutJourney: { [key: string]: any }[];
  aboutExp: { [key: string]: any }[];
  contactEmail: { [key: string]: any };
  contactConnect: { [key: string]: any }[];
  icons: { [key: string]: any };
}

function JourneySection({
  aboutJourney,
}: {
  aboutJourney: { [key: string]: any };
}) {
  return (
    <>
      {aboutJourney?.map((journey: { [key: string]: any }) => {
        return (
          <>
            <div className="journey-section width-20">
              <p className="large">{journey['Year']}</p>
              <p>{journey['Description']}</p>
              <img
                src={journey['Image'] + journey['Format']}
                alt={journey['Year']}
                style={{
                  left: journey['HorizontalOffset'] + 'rem',
                  top: journey['VerticalOffset'] + 'rem',
                }}
                className={journey['Landspace'] ? 'landscape' : 'portrait'}
              ></img>
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
            <div className="tool-items">
              <img
                src={tool['Image'] + tool['Format']}
                alt={tool['SkillName']}
              ></img>
              <p>{tool['SkillName']}</p>
            </div>
          </>
        );
      })}
    </>
  );
}

function ExperienceSection(aboutExp: { [key: string]: any }[]): JSX.Element {
  return (
    <>
      {aboutExp?.map((exp: { [key: string]: any }) => {
        return (
          <>
            <div className="experience-section" id={exp['Name']}>
              <div className="description-container width-30">
                {/* Heading */}
                <h2>{exp['Name']}</h2>
                <p>{exp['Description']}</p>

                {/* Statistics */}
                <div className="stats-container">
                  {ExperienceStats('Years', exp['Years'])}
                  {ExperienceStats('Projects', exp['Project'])}
                </div>

                {/* Tools & skills */}
                <div className="tool-container">
                  <h3>Tools and skills</h3>
                  <div className="tool-section">
                    {ExperienceTools(exp['Skills'])}
                  </div>
                </div>
              </div>

              <img
                className="width-60"
                src={exp['Thumbnail'] + exp['Format']}
                alt={exp['Name']}
              ></img>
            </div>
            <div className="divider"></div>
          </>
        );
      })}
    </>
  );
}

export const About: React.VFC<AboutProps> = ({ aboutJourney, aboutExp }) => (
  <div className="main-container">
    {/* Intro section */}
    <img
      src="../assets/graphics/About.svg"
      alt="About"
      className="width-90"
    ></img>
    <div className="width-90">
      <p className="mid width-60">
        {' '}
        I am Quan, a creative UX engineer with 3 years of experience in
        developing and designing innovative solutions. <br />
        <br /> My main fields are Product Development and Software Engineering.
        I also enjoy experimenting with AI and designing graphic arts in my free
        time.
      </p>
    </div>
    <div className="divider"></div>

    {/* Journey section */}
    <div className="about-container width-90">
      <h1>Journey</h1>
      <div id="journey-container">
        <JourneySection aboutJourney={aboutJourney} />
      </div>
    </div>
    <div className="divider"></div>

    {/* Experience section */}
    <div className="about-container width-90">
      <h1>Experience</h1>
      <div id="experience-container">{ExperienceSection(aboutExp)}</div>
    </div>
    <div className="divider"></div>

    {/* Future section */}
    <div className="about-container width-90">
      <h1>Future Development</h1>
      <div className="width-90">
        <p className="width-60">
          I am seeking to leverage my expertise in software engineer and product
          development by joining cutting-edge projects that aims at solving
          real-world problems. <br />
          <br /> Besides, a job/title in academia is what I'm aiming for in
          longer terms. I am fascinated in the phenomenally interactive
          application of AI and Large Language Model (i.e., Chat GPT) on
          everyday's tasks, including but not limited to write emails, design
          graphics, browse inspirations, and write “bugs”.
        </p>
      </div>
    </div>
  </div>
);
