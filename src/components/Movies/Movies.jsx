import images from "../../assets/images";
import MoviesCard from "./MoviesCard";
import { useNavigate } from "react-router-dom";
import "./movies.css";

export default function Movies() {

  const navigate = useNavigate();

  function handleClick() {

      navigate('/HomePage');
  }

  const genres = JSON.parse(localStorage.getItem("selectedGenres"));

  return (
    <div className="movies--container">
      <div className="movies--header">
        <div className="sub--header">
          <h2 className="header--app--name">Super app</h2>
          <p className="header--text">Entertainment according to your choice</p>
        </div>
        <img className="movies--icon" src={images.icon} alt="icon" onClick={handleClick} />
      </div>

      <div >
      {genres.map((movie) => (
          <MoviesCard genre={movie} />
        ))}
      </div>
    </div>
  );
}
