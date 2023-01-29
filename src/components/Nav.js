import { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
function Nav({ setSearch, genres, setSelectedGenre }) {
  function handleSearch(event) {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  function handleSelectGenre(event) {
    setSelectedGenre(event.target.value);
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/React-movie">Netflix</Link>
        </li>

        <li>
          <select onChange={handleSelectGenre}>
            <option></option>
            {genres.map((genre) => {
              return <option key={genre}>{genre}</option>;
            })}
          </select>
          <input type="text" placeholder="Enter here" onChange={handleSearch} />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
