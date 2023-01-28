import { useState } from "react";
import { useEffect } from "react";
import Movie from "../components/Movie";
import Nav from "../components/Nav";
import "../style.css";

function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  //검색어에 따른 영화 filter
  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });
  console.log(filteredMovies);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Nav setSearch={setSearch} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="movie__container">
          {filteredMovies.map((movie) => (
            <Movie
              coverImg={movie.medium_cover_image}
              id={movie.id}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
