import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class ImageCarousel extends Component {
  render() {
    return (

    <div>
      <h1 className="text-white">HELLO WORLD</h1>
    </div>
    )
  }
}

const mapStateToProp = state => (
  {
    photos: state.photos.photos,
  }
);

ImageCarousel.propTypes = {
  photos: Proptypes.instanceOf(Array).isRequired,
}


export default connect(mapStateToProp)(ImageCarousel);
