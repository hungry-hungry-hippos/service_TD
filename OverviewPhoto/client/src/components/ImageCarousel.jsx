import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { displayPhotoModal, displayCarouselModal } from '../action/actions';
import style from '../overview.module.css';

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: null,
    };
  }

  componentDidMount() {
    const { currentStoreId } = this.props;
    document.getElementById(`carouselModalImage${currentStoreId.toString()}`).classList.add('d-flex');
    document.getElementById(`carouselModalImage${currentStoreId.toString()}`).classList.remove('d-none');
    this.setState({ currentId: currentStoreId });
  }

  onNext() {
    const { photos } = this.props;
    const { currentId } = this.state;
    const newId = currentId >= photos.length ? 1 : currentId + 1;
    document.getElementById(`carouselModalImage${newId.toString()}`).classList.add('d-flex');
    document.getElementById(`carouselModalImage${newId.toString()}`).classList.remove('d-none');
    document.getElementById(`carouselModalImage${currentId.toString()}`).classList.add('d-none');
    document.getElementById(`carouselModalImage${currentId.toString()}`).classList.remove('d-flex');
    this.setState({ currentId: newId });
  }

  onPrev() {
    const { photos } = this.props;
    const { currentId } = this.state;
    const newId = currentId <= 1 ? photos.length : currentId - 1;
    document.getElementById(`carouselModalImage${newId.toString()}`).classList.add('d-flex');
    document.getElementById(`carouselModalImage${newId.toString()}`).classList.remove('d-none');
    document.getElementById(`carouselModalImage${currentId.toString()}`).classList.add('d-none');
    document.getElementById(`carouselModalImage${currentId.toString()}`).classList.remove('d-flex');
    this.setState({ currentId: newId });
  }


  togglePhotoModal() {
    const { onPhotoModalRequest, onCarouselModalRequest } = this.props;
    onCarouselModalRequest();
    onPhotoModalRequest();
  }

  render() {
    const { photos } = this.props;
    const { currentId } = this.state;
    return (
      <div id="imageCarousel" className="carousel slide">
        <div className={style.slideshowView}>
          <span>{`${currentId} of ${photos.length}`}</span>
          <span className={style.modalicon} onClick={this.togglePhotoModal.bind(this)}>❐</span>
        </div>
        <div className="carousel-inner">
          {photos.map(photo => (
            <div className="carousel-item d-none align-items-center justify-content-center" key={photo.photoId} id={`carouselModalImage${photo.photoId}`}>
              <img src={photo.photo_url} alt="" className={style.carouselimg} />
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
    );
  }
}

const mapStateToProp = state => (
  {
    currentStoreId: state.photos.currentStoreId,
    photos: state.photos.photos,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onCarouselModalRequest: () => dispatch(displayCarouselModal()),
    onPhotoModalRequest: () => dispatch(displayPhotoModal()),
  }
);

ImageCarousel.propTypes = {
  currentStoreId: Proptypes.number.isRequired,
  photos: Proptypes.instanceOf(Array).isRequired,
  onPhotoModalRequest: Proptypes.func.isRequired,
  onCarouselModalRequest: Proptypes.func.isRequired,
};


export default connect(mapStateToProp, mapDispatchToProps)(ImageCarousel);
