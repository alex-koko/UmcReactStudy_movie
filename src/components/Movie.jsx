import React from 'react';
import '../index.css';

const IMG_BASE_URL ="https://image.tmdb.org/t/p/w1280/";
function Movie({title, poster_path, vote_average, overview}){
    return (
        <div className="movie-wrapper">
            <div className="movie-front">
                <div className="movie-image-container">
                    <img src={IMG_BASE_URL+poster_path} className="movie-image" alt="Movie Poster"/>
                </div>
                <div className="movie-content-container">
                    <span className="movie-title">{title}</span>
                    <span className="movie-grade">{vote_average}</span>
                </div>
            </div>
            <div className="movie-back">
                <div className="movie-overview-container">
                    <span className="movie-title2">{title}</span>
                    <hr/>
                    <span className="movie-overview">{overview}</span>
                </div>
            </div>
        </div>
    );
}

export default Movie