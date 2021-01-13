// implement MovieCard component here
import React, { Component } from 'react';
import Rating from './Rating';

export default class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="Imagem" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">
            { title }
          </h4>
          <h5 className="movie-card-subtitle">
            { subtitle }
          </h5>
          <p className="movie-card-storyline">
            { storyline }
          </p>
        </div>
        <Rating className="movie-card-rating " rating={ rating } />
      </div>
    )
  }
}
