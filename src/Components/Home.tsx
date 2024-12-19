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
      {/* WORKING PAPERS */}
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
              {/* Render authors with clickable links */}
              <div style={{ fontSize: '16px', marginBottom: '4px' }}>
                {Array.isArray(publication.description) ? (
                  <>
                    (with{" "}
                    {publication.description.map((author, index) => {
                      const isLast = index === publication.description.length - 1;
                      const totalAuthors = publication.description.length;

                      return (
                        <span key={index}>
                          {/* Add commas for all but the first and last author */}
                          {index > 0 && (totalAuthors > 2 || !isLast ? ", " : "")}

                          {/* Insert "and" before the last author */}
                          {isLast && index > 0 && " and "}

                          {/* Render the author name with link if available */}
                          {author.link ? (
                            <a
                              href={author.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: 'blue' }} // Consistent link color
                            >
                              {author.name}
                            </a>
                          ) : (
                            <span>{author.name}</span>
                          )}
                        </span>
                      );
                    })}
                    )
                  </>
                ) : (
                  publication.description
                )}
              </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <hr />
      {/* WORK IN PROGRESS*/} 
      {WIPSectionConfigs.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          {/* Render each publication in this section */}
          <ul>
            {section.worksinprogress.map((publication, pubIndex) => (
              <li key={pubIndex}>
                <div style={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>{publication.title}</div>
              {/* Render authors with clickable links */}
              <div style={{ fontSize: '16px', marginBottom: '4px' }}>
                {Array.isArray(publication.description) ? (
                  <>
                    (with{" "}
                    {publication.description.map((author, index) => {
                      const isLast = index === publication.description.length - 1;
                      const totalAuthors = publication.description.length;

                      return (
                        <span key={index}>
                          {/* Add commas for all but the first and last author */}
                          {index > 0 && (totalAuthors > 2 || !isLast ? ", " : "")}

                          {/* Insert "and" before the last author */}
                          {isLast && index > 0 && " and "}

                          {/* Render the author name with link if available */}
                          {author.link ? (
                            <a
                              href={author.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: 'blue' }} // Consistent link color
                            >
                              {author.name}
                            </a>
                          ) : (
                            <span>{author.name}</span>
                          )}
                        </span>
                      );
                    })}
                    )
                  </>
                ) : (
                  publication.description
                )}
              </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Home;