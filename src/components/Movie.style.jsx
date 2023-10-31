import styled from 'styled-components';
import React from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

const MovieWrapper = styled.div`
  margin: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  background-color: #373b69;
  width: 250px; /* 예시로 너비를 지정 */
  position: relative;

  img {
    width: 250px;
  }

  .movie-content-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* 요소들을 가장 왼쪽과 가장 오른쪽에 배치 */
    align-items: center; /* 요소들을 수직으로 가운데 정렬 */
    color: white;
  }

  .movie-overview-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
  }

  .movie-title,
  .movie-title2 {
    font-size: 16px;
    font-weight: bold;
    margin-right: auto; /* 왼쪽에 정렬하기 위해 오른쪽 마진을 최대화 */
  }

  .movie-grade {
    font-size: 16px;
    margin-left: auto; /* 오른쪽에 정렬하기 위해 왼쪽 마진을 최대화 */
  }

  .movie-overview {
    font-size: 16px;
    color: white;
  }

  .movie-back {
    display: none; /* 초기에 숨겨진 상태 */
    position: absolute; /* 절대 위치 설정 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover .movie-back {
    display: flex; /* 호버 했을 때 보이도록 설정 */
  }

  &:hover .movie-front {
    opacity: 0.2;
  }

  .movie-front {
    display: block;
  }
`;

const MovieStyle = ({ title, poster_path, vote_average, overview }) => {
  return (
    <MovieWrapper>
      <div className="movie-front">
        <div className="movie-image-container">
          <img src={IMG_BASE_URL + poster_path} className="movie-image" alt="Movie Poster" />
        </div>
        <div className="movie-content-container">
          <span className="movie-title">{title}</span>
          <span className="movie-grade">{vote_average}</span>
        </div>
      </div>
      <div className="movie-back">
        <div className="movie-overview-container">
          <span className="movie-title2">{title}</span>
          <hr />
          <span className="movie-overview">{overview}</span>
        </div>
      </div>
    </MovieWrapper>
  );
};

export default MovieStyle;