import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 1,
    };
  }

  componentDidMount() {
    document.getElementById(`${this.state.currentId.toString()}`).classList.add('d-flex');
    document.getElementById(`${this.state.currentId.toString()}`).classList.remove('d-none');
  }

  onNext() {
    const { photos } = this.props;
    const { currentId } = this.state;
    const newId = currentId >= photos.length ? 1 : currentId + 1;
    document.getElementById(`${newId.toString()}`).classList.add('d-flex');
    document.getElementById(`${newId.toString()}`).classList.remove('d-none');
    document.getElementById(`${currentId.toString()}`).classList.add('d-none');
    document.getElementById(`${currentId.toString()}`).classList.remove('d-flex');
    this.setState({ currentId: newId });
  }

  onPrev() {
    const { photos } = this.props;
    const { currentId } = this.state;
    const newId = currentId <= 1 ? photos.length : currentId - 1;
    document.getElementById(`${newId.toString()}`).classList.add('d-flex');
    document.getElementById(`${newId.toString()}`).classList.remove('d-none');
    document.getElementById(`${currentId.toString()}`).classList.add('d-none');
    document.getElementById(`${currentId.toString()}`).classList.remove('d-flex');
    this.setState({ currentId: newId });
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
