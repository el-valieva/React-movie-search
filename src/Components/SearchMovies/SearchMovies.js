import React, {useState} from "react"
import styles from "./SearchMovies.module.css"
import MovieCard from "../Movie Card/MovieCard"

const theMovieDBApiKey = process.env.REACT_APP_THE_MOVIE_DB_API_KEY

const SearchMovies = () => {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])


    const fetchMovies = async (e) => {
        e.preventDefault()

        if (query === '') {
            return
        }

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${theMovieDBApiKey}&language=en-US&query=${query}&page=1&include_adult=false`
        
        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch(err) {
            console.error(err)
        }
    }
     
    return (
        <div>
            <form className={styles.form}>
                <label className={styles.label} htmlFor="query">Movie name</label>
                <input 
                    className={styles.input} 
                    type="text" 
                    name="query" 
                    placeholder="e.g. Back to the Future"
                    value={query}
                    minLength={1}
                    onChange={(e) => setQuery(e.target.value)} />
                <button 
                    className={styles.button} 
                    type="submit" 
                    onClick={fetchMovies}>Search</button>
            </form>
            <div className={styles.cardList}>
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))
            }
            </div>
        </div>
    )

}

export default SearchMovies