import React from "react";
import PropTypes from "prop-types";

// Movie 컴포넌트는 state가 필요없으므로 클래스 컴포넌트가 될 필요 없음
function Movie({ id, year, title, summary, poster }) {
  return <h5>{title}</h5>;
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
