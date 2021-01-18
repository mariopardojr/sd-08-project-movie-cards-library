import React from 'react';
import PropTypes from 'prop-types';


class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        {rating}
      </div>
    ); 
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
