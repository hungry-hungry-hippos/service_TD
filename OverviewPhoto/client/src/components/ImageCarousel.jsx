import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: '1',
    }
  }

  componentDidMount() {
    document.getElementById(`${this.state.currentId}`).classList.add('d-flex');
    document.getElementById(`${this.state.currentId}`).classList.remove('d-none');
  }

  onNext() {
    console.log('next')
  }
  
  onPrev() {
    console.log('prev')
  }

  render() {
    const { photos } = this.props;
    return (
      <div id="imageCarousel" className="carousel slide">
        <div className="carousel-inner">
          {photos.map(photo => (
            <div className="carousel-item d-none align-items-center justify-content-center" key={photo.photoId} id={photo.photoId}>
              <img src={photo.photo_url} alt="" className="d-block" style={{ height: '80vh' }} />
            </div>
          ))
          }
        </div>
        <div className="carousel-control-prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" onClick={this.onPrev.bind(this)} />
        </div>
        <div className="carousel-control-next">
          <span className="carousel-control-next-icon" aria-hidden="true" onClick={this.onNext.bind(this)} />
        </div>
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
