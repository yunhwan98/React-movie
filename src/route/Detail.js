import App from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/Nav";

function Detail() {
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <Nav />
      <h1>Detail</h1>
    </div>
  );
}

export default Detail;
