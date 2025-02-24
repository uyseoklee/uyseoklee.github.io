import React from "react";
import ProfileImage from "./headshot_2025_feb.png";

const Profile: React.FC = () => {
  return (
    <div className="profile-panel">
      <h1>{"Uyseok Lee"}</h1>
      {/*<p>
        {
          "Research Area Behavioural Economics | Cultural Economics | Political Economy MA, UBC; BIE, UBC"
        }
      </p>
      <p>{"Economist or whatever idk"}</p>
      <hr/>*/}
      <img src={ProfileImage} className="profile-photo" />
      <hr/>
      <p><b>Email: </b>{"uyseoklee@student.ubc.ca"}</p>
      <p>[<a
        href={"https://uyseoklee.github.io/papers/CV_Uyseok_Lee_Academic.pdf"}
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
      </a>]</p>
      <hr />
    </div>
  );
};

export default Profile;
