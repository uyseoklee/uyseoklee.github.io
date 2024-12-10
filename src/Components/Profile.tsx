import React from "react";
import ProfileImage from "./profile_picture.png";

const Profile: React.FC = () => {
  return (
    <div className="profile-panel">
      <h1>{"Uyseok Lee"}</h1>
      <p>
        {
          "Research Area Behavioural Economics | Cultural Economics | Political Economy MA, UBC; BIE, UBC"
        }
      </p>
      <p>{"Economist or whatever idk"}</p>
      <hr/>
      <img src={ProfileImage} className="profile-photo" />
      <hr/>
      <p><b>Email: </b>{"hisemail@gmail.com"}</p>
      <p>[<a
        href={"link to google scholar"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Scholar
      </a>]</p>
      <hr />
    </div>
  );
};

export default Profile;
