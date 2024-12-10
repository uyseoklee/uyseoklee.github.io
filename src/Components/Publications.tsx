import React from "react";
import { Publication } from "./Constants";

interface PublicationListProps {
  publications: Publication[];
}

const PublicationList: React.FC<PublicationListProps> = ({ publications }) => {
  return (
  <div>
      {publications.map((pub, index) => (
        <p key={index}>
          <strong>{pub.title}</strong> <br />
          <span>{pub.description}</span> <br />
          <a href={pub.link} target="_blank" rel="noopener noreferrer">
            [PDF]
          </a>
        </p>
      ))}
      <hr></hr>
    </div>
  );
};

export default PublicationList;
