import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: {
    title: 'Title',
    subtitle: 'Subtitle',
    storyline: 'Storyline',
    rating: 0,
    imagePath: 'ImagePath',
  },
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
