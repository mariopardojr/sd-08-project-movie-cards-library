// implement MovieList component here

import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        {movies.map((element) => <MovieCard movie={ element } key={ element.title } />)}
      </section>
    );
  }
}

export default MovieList;
