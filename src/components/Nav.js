import { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
function Nav({ setSearch, genres, setSelectedGenre, mode }) {
  function handleSearch(event) {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  function handleSelectGenre(event) {
    event.target.value === "select"
      ? setSelectedGenre("")
      : setSelectedGenre(event.target.value);
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/React-movie">Netflix</Link>
        </li>
        {mode === "Home" && (
          <li>
            <select onChange={handleSelectGenre}>
              <option value="">select</option>
              {genres.map((genre) => {
                return <option key={genre}>{genre}</option>;
              })}
            </select>
            <input
              type="text"
              placeholder="Enter here"
              onChange={handleSearch}
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
