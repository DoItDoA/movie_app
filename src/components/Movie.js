import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

//to에 여러가지 props 내용물이 담겨있는데 그 중 pathname, state를 사용
// ``(백틱)은 문자열과 변수를 한꺼번에 표현

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`, // href와 같이 설정된 경로로 이동
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        }, // state에 값을 넣어서 해당 컴포넌트 props.state에서 사용 가능
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
          {/* slice는 0번째부터 180번째까지 글자 내용을 표출한다 */}
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired, // isRequired가 있으면 props 내용물이 빠지면 안되고, 없으면 있어도 되고 없어도 된다
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}; // propTypes는 전송된 props 중에 제대로 타입이 왔는지 빠진것은 없는지 확인하기 위한 것이다.

export default Movie;
