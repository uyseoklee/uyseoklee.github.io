import React from "react";
import { WPSectionConfigs } from "./WorkingPapers";
import { WIPSectionConfigs } from "./WorkInProgress";

const Home: React.FC = () => {
  return (
    <div className="resume-panel">
      <section>
        <h2>Home</h2>
        <p>
          {"Welcome to my website! I am a Ph.D. candidate in economics at the University of British Columbia, currently in my 4th year."}
        </p>
        <p>
          {"I study the causes and consequences of "}
          <em>culture</em>
          {" - the values, beliefs, and knowledge that affects human behavior and is transmitted between individuals."}
        </p>
        <hr />
      </section>
        
      {/* Dynamically render sections from SectionConfigs */}
      {WPSectionConfigs.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          {/* Render each publication in this section */}
          <ul>
            {section.workingpapers.map((publication, pubIndex) => (
              <li key={pubIndex}>
                <a href={publication.link} target="_blank" rel="noopener noreferrer">
                <div style={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>{publication.title}</div>
                </a>
                {/* Only render the description without the colon */}
                <span> {publication.description}</span> {/* No colon here */}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <hr />
      {WIPSectionConfigs.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          {/* Render each publication in this section */}
          <ul>
            {section.worksinprogress.map((publication, pubIndex) => (
              <li key={pubIndex}>
                <div style={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>{publication.title}</div>
                {/* Only render the description without the colon */}
                <span> {publication.description}</span> {/* No colon here */}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Home;