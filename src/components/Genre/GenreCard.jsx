import React from "react";
import "./genre.css";

export default function GenreCard(props) {
  const cardClassName = `genre--card ${props.isSelected ? "selected" : ""}`;

  return (
    <div
      className={cardClassName}
      style={{ backgroundColor: props.backgroundColor }}
      onClick={props.onSelect}
    >
      <div className="gen-name"> {props.GenreName}</div>
      <img className="gen-image" src={props.coverImg} alt="genre" />
    </div>
  );
}
