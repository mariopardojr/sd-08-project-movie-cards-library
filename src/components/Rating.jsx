// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        { rating }
      </div>
    );
  }
}

Rating.protoType = { rating: PropTypes.number };
Rating.defaulProps = { rating: 0 };

export default Rating;
