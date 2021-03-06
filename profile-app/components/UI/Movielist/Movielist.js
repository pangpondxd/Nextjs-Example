import Link from "next/link";
import React from "react";
class MovieList extends React.Component {
  shorten = (text, maxLength) => {
    if (text && text.length >= maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  };
  renderMovie(movies) {
    return movies.map((movie) => (
      <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
            <a>
              <img className="card-img-top" src={movie.image} alt="" />
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                <a>{movie.name}</a>
              </Link>
            </h4>
            <h5 className="movie-genre">{movie.genre}</h5>
            <p className="card-text">{this.shorten(movie.description, 50)}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{movie.rating}</small>
          </div>
        </div>
      </div>
    ));
  }
  render() {
    const { movies } = this.props;
    return <React.Fragment>{this.renderMovie(movies)}</React.Fragment>;
  }
}

export default MovieList;
