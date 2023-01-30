import { useState } from "react";
import { useEffect } from "react";
import Movie from "../components/Movie";
import Nav from "../components/Nav";
import "../style.css";

function Home() {
  const [mode, setMode] = useState("Home");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const genres = [...new Set(movies.map((movie) => movie.genres).flat(1))];
  const [selectedGenre, setSelectedGenre] = useState("");
  console.log(movies);
  console.log(selectedGenre);
  //검색어에 따른 영화 filter
  const filteredMovies = movies.filter((movie) =>
    selectedGenre
      ? movie.genres.includes(selectedGenre) &&
        movie.title.toLowerCase().includes(search.toLowerCase())
      : movie.title.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(filteredMovies);
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
      <Nav
        setSearch={setSearch}
        genres={genres}
        setSelectedGenre={setSelectedGenre}
        mode={mode}
      />
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
              key={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
