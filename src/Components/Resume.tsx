import React, { useState } from "react";
import PublicationList from "./Publications";
import { SectionConfigs } from "./Constants";
import Teaching from "./Teaching";

enum DisplayType {
  Bio,
  Publications,
  Experiences,
}

const Resume: React.FC = () => {
  const [state, setState] = useState<DisplayType>(DisplayType.Bio);

  const context = () => {
    switch (state) {
      case DisplayType.Bio:
        return (
          <section>
            <h2>Bio</h2>
            <p>
              {
                "Who lives in a pineapple under the sea? Absorbent and yellow and porous is he? If nautical nonsense be something you wish,Then drop on the deck and flop like a fish!"
              }
            </p>
            <p>
              {
                "Who lives in a pineapple under the sea? Absorbent and yellow and porous is he? If nautical nonsense be something you wish,Then drop on the deck and flop like a fish!"
              }
            </p>
            <hr />
          </section>
        );
      case DisplayType.Publications:
        return SectionConfigs.map(({ title, description, publications }) => (
          <section>
            <h2>{title}</h2>
            <p>{description}</p>

            <PublicationList publications={publications} />
          </section>
        ));
      case DisplayType.Experiences:
        return <Teaching />;
    }
  };
  return (
    <div className="resume-panel">
      <div className="button-tab">
        <button
          className={state !== DisplayType.Bio ? "selected" : undefined}
          onClick={() => setState(DisplayType.Bio)}
        >
          Bio
        </button>
        <button
          className={state !== DisplayType.Publications ? "selected" : undefined}
          onClick={() => setState(DisplayType.Publications)}
        >
          Publications
        </button>
        <button
          className={state !== DisplayType.Experiences ? "selected" : undefined}
          onClick={() => setState(DisplayType.Experiences)}
        >
          Experiences
        </button>
      </div>
      {context()}
    </div>
  );
};

export default Resume;
