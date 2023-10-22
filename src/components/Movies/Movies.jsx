import React from "react";
import images from "../../assets/images";
import "./movies.css";

export default function Movies() {
  return (
    <div className="movies--container">
      <div className="movies--header">
        <div className="sub--header"> 
            <h2 className="header--app--name">Super app</h2>
            <p className="header--text">Entertainment according to your choice</p>
        </div>
        <img className="movies--icon" src={images.icon} alt="icon"></img>
      </div>
    </div>
  );
}
