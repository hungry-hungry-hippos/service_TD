import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class ImageCarousel extends Component {
  onClick() {
    console.log('hi')
  }

  render() {
    const { photos } = this.props;
    return (
      <div id="imageCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active d-flex align-items-center justify-content-center">
            <img src={photos[11].photo_url} alt="" className="d-block" style={{height: "80vh"}} />
          </div>
          {console.log(photos)}
          {photos.slice(1).map(photo => (
            <div className="carousel-item" key={photo.photoId}>
              <img src={photo.photo_url} id={photo.photoId} alt="" className="d-block w-100" />
            </div>
          ))
          }
        </div>
        <a className="carousel-control-prev" href="#imageCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#imageCarousel" role="button" dataslide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
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
