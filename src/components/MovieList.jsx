import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
    render() {
        const { movies } = this.props;
        return (
            <div className="movie-list">
                {movies.map((movie) => <MovieCard movie ={ movie } key={ movie.title } />)}
            </div>
        );
    }
}
MovieList.propTypes = {
    movies: PropTyps.arrayOf(PropTypes.object).isRequired,
};
export default MovieList
