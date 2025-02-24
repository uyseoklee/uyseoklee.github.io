import React from "react";
import { WPSectionConfigs } from "./WorkingPapers";
import { WIPSectionConfigs } from "./WorkInProgress";

const Home: React.FC = () => {
  return (
    <div className="resume-panel">
      <section>
        <p>
          {"Welcome to my website! I am a Ph.D. candidate in economics at the University of British Columbia, currently in my 4th year. I study the causes and consequences of "}
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
          <ul style={{ padding: 0, margin: 0 }}>
            {section.workingpapers.map((publication, pubIndex) => (
              <li key={pubIndex}>
                <div style={{ color: 'black', fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{publication.title}</div>
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
                {/* Display Revise & Resubmit if available */}
                {publication.revise && (
                  <div style={{ fontSize: '16px', color: 'black', marginBottom: '4px' }}>
                    {publication.revise.split(",")[0]}, <em>{publication.revise.split(",")[1].trim()}</em>
                  </div>
                )}
                {/* Render custom links dynamically with square brackets */}
                {publication.links && publication.links.length > 0 && (
                  <div style={{ fontSize: '16px', color: 'black', marginBottom: '4px' }}>
                    [
                    {publication.links.map((link, index) => (
                      <span key={index}>
                        {index > 0 && " | "} {/* Add separator between links */}
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      </span>
                    ))}
                    &nbsp;]
                  </div>
                )}                        
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
          <ul style={{ padding: 0, margin: 0 }}>
            {section.worksinprogress.map((publication, pubIndex) => (
              <li key={pubIndex}>
                <div style={{ color: 'black', fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{publication.title}</div>
             
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