import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
      <div className='movie-list '>
        {this.props.movies.map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.object,
};

export default MovieList;
