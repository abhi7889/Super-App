import React, { useEffect, useState } from "react";

export default function MoviesCard({ genre }) {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "974d3c6cabmshe086d9981fb7039p11e61fjsn6f1675d411eb",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2022`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, [genre]);

  return (
    <>
      <p className="genre--names">{genre}</p>
      <div className="poster-image">
        {movies.map((movie, idx) => {
          return (
            <div className="movies--card" key={idx}>
              <img
                src={movie?.primaryImage?.url}
                alt="movie-poster"
                className="poster--card"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
