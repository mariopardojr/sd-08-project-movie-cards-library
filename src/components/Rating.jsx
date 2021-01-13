// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

class Rating extends React.Component {
  render() {
    return (
      <div className="rating">{this.props.rating}</div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
