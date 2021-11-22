import React from "react"
import styles from "./App.module.css"
import SearchMovies from "./Components/SearchMovies/SearchMovies"

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search movie in The Movie Database (TMDB)</h1>
      <SearchMovies />
    </div>
  );
}

export default App
