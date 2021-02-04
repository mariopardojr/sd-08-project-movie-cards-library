import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePatch, rating } = this.props.movie;
    return (
      <section>
        <img src= {imagePatch}></img>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </section>
    )
  }
}

export default MovieCard;
