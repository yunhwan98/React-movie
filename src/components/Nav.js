import { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
function Nav({ setSearch }) {
  function handleSearch(event) {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/React-movie">Netflix</Link>
        </li>

        <li>
          <input type="text" placeholder="Enter here" onChange={handleSearch} />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
