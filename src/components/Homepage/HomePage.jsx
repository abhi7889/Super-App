import React from "react";
import "./homepage.css";
import images from "../../assets/images";
import { useNavigate } from "react-router-dom";
import DateTimeDisplay from "./DateTime";
import Weather from "./Weather";
import Notes from "./Notes";
import Timer from "./Timer";
import News from "./News";

export default function HomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Movies");
  }

  const userData = JSON.parse(localStorage.getItem("userData"));
  const genre = JSON.parse(localStorage.getItem("selectedGenres"));

  return (
    <div className="main-container">
      <div className="left-container">
        <div className="user-info">
          <div>
            <img className="profile-img" src={images.profileImg} alt="user" />
          </div>
          <div>
            <div className="login-info">
              <p className="name"> {userData.name}</p>
              <p className="email">{userData.email}</p>
              <p className="username">{userData.userName}</p>
            </div>

            <div className="selected--box--hp">
              {genre &&
                genre.map((selectedGenre, index) => (
                  <div className="selected-genre--hp" key={index}>
                    {selectedGenre}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div>
          <DateTimeDisplay />
        </div>
        <div>
          <Weather />{" "}
        </div>
        <div>
          {" "}
          <Timer />{" "}
        </div>
      </div>
      <>
        <Notes />
      </>
      <div>
        <div>
          <News />
        </div>
        <button className="browse" onClick={handleClick}>
          Browse
        </button>
      </div>
    </div>
  );
}
