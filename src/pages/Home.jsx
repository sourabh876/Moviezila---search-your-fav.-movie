
import Moviecard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  const [searchQuery, setsearchQuery] = useState("");
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setmovies(popularMovies);
      } catch (err) {
        console.log(err);
        seterror("Failed to load movies...");
      } finally {
        setloading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handlesearch =async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if (loading) return

    setloading(true)
    try{
      const searchResults = await searchMovies(searchQuery)
      setmovies(searchResults)
      seterror(null)
    }catch(err){
      console.log(err)
      seterror("Failed to search movies...")
    }finally{
       setloading (false)
    }
  };

  return (
    <>
      <div className="home">
        <form onSubmit={handlesearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movie..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map(
              (movie) => (
               <Moviecard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
