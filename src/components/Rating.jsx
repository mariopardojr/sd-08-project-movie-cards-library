// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <h1>{ rating }</h1>
    );
  }
}

export default Rating;
