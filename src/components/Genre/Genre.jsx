import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./genre.css";
import GenreCard from "./GenreCard.jsx";
import images from "../../assets/images";

export default function Genre({ history }) {
  const backgroundColors = [
    "#FF5209",
    "#D7A4FF",
    "#148A08",
    "#84C2FF",
    "#902500",
    "#7358FF",
    "#FF4ADE",
    "#E61E32",
    "#6CD061",
  ];

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      GenreName: "Action",
      coverImg: images.image1,
      backgroundColor: backgroundColors[0],
      isSelected: false,
    },
    {
      id: 2,
      GenreName: "Drama",
      coverImg: images.image2,
      backgroundColor: backgroundColors[1],
      isSelected: false,
    },
    {
      id: 3,
      GenreName: "Romance",
      coverImg: images.image3,
      backgroundColor: backgroundColors[2],
      isSelected: false,
    },

    {
      id: 4,
      GenreName: "Thriller",
      coverImg: images.image4,
      backgroundColor: backgroundColors[3],
      isSelected: false,
    },
    {
      id: 5,
      GenreName: "Western",
      coverImg: images.image6,
      backgroundColor: backgroundColors[4],
      isSelected: false,
    },
    {
      id: 6,
      GenreName: "Horror",
      coverImg: images.image7,
      backgroundColor: backgroundColors[5],
      isSelected: false,
    },
    {
      id: 7,
      GenreName: "Fantasy",
      coverImg: images.image8,
      backgroundColor: backgroundColors[6],
      isSelected: false,
    },
    {
      id: 8,
      GenreName: "Music",
      coverImg: images.image9,
      backgroundColor: backgroundColors[7],
      isSelected: false,
    },
    {
      id: 9,
      GenreName: "Fiction",
      coverImg: images.image10,
      backgroundColor: backgroundColors[8],
      isSelected: false,
    },
  ];

  const handleGenreSelect = (genre) => {
    const updatedGenres = [...selectedGenres];

    if (updatedGenres.includes(genre)) {
      const index = updatedGenres.indexOf(genre);
      updatedGenres.splice(index, 1);
    } else {
      updatedGenres.push(genre);
    }

    data.map((item) => ({
      ...item,
      isSelected: updatedGenres.includes(item.GenreName),
    }));

    setSelectedGenres(updatedGenres);
    setError(null);
  };
  function handleClick(event) {
    if (selectedGenres.length < 3) {
      setError("Minimum 3 category required.");
    } else {
      localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
      navigate("/HomePage");
    }
  }

  const genreCards = data.map((item) => (
    <GenreCard
      key={item.id}
      backgroundColor={item.backgroundColor}
      GenreName={item.GenreName}
      coverImg={item.coverImg}
      isSelected={item.isSelected}
      onSelect={() => handleGenreSelect(item.GenreName)}
    />
  ));

  return (
    <div className="genre-main">
      <div className="left-selected-genre">
        <div>
          <h1 className="Sup-app ">Super app</h1>
          <div className="choose-category-txt">
            Choose your entertainment category
          </div>
        </div>
        <div className="selected--box">
          {selectedGenres.map((genre) => (
            <div className="selected-genre" key={genre}>
              {genre}{" "}
              <span
                className="deselect-icon"
                onClick={() => handleGenreSelect(genre)}
              >
                X
              </span>
            </div>
          ))}
        </div>
        {error ? (
          <div className="error">
            <img className="error--img" src={images.vector} alt="error" />
            {error}
          </div>
        ) : null}
      </div>
      <div className="right-genre-list">
        <div className="selection-box">{genreCards}</div>

        <button className="next--button" onClick={handleClick}>
          Next
        </button>
      </div>
    </div>
  );
}
