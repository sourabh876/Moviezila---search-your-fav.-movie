import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";


function Favorites () {

    const {favorites} = useMovieContext();

    if (Favorites){

        return(<div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie = {movie}  key={movie.id} />
                ))}

            </div>
            </div>
        )
    }

    return <div className="favorite_empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your fovorites and they will appear here!</p>
    </div>
    
}



export default Favorites;