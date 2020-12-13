import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// Movie 컴포넌트는 state가 필요없으므로 클래스 컴포넌트가 될 필요 없음
function Movie({ year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

// 가져오는 Movie Data의 형태? check (문자열인지 숫자인지 / 값이 있는지 없는지 check)
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
