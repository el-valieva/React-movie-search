import React from 'react'
import styles from './MovieCard.module.css'
import posterPlaceholder from '../../assets/movie-poster-placeholder.jpeg'

const MovieCard = ({movie}) => {
    const posterPath = movie.poster_path === null ? posterPlaceholder : `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`

    return (
        <div className={styles.card} key={movie.id}>
            <img className={styles.cardImage} 
                src={posterPath}
                alt={movie.title + ' poster'}
            />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{movie.title}</h3>
                <p className={styles.movieReleaseData}><small>RELEASE DATE: {movie.reliase_date}</small></p>
                <p className={styles.movieRating}><small>RATING: {movie.vote_average}</small></p>
                <p className={styles.cardDesc}>{movie.overview}</p>
            </div>
        </div>
    )
} 

export default MovieCard