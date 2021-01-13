import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default class Rating extends Component {
  render() {
    const { rating } = this.props;
    return <div className="rating">{rating}</div>;
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };
