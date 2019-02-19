import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import requestPhotos, { displayPhotoModal } from '../action/actions';
import style from '../overview.module.css';
import Photo from './Photo';

class Photos extends Component {
  componentDidMount() {
    const { onRequestPhotos } = this.props;
    onRequestPhotos();
  }

  togglePhotoModal() {
    const { onPhotoModalRequest } = this.props;
    onPhotoModalRequest();
  }

  render() {
    const { pending, photos } = this.props;
    const sortPhotos = photos.slice(0, 4);
    if (pending && !photos.length) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">
              Loading...
              Please go to a specific restaurant if you have not already done so
            </span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className={style.photodiv}>
          {sortPhotos.map(link => <Photo key={link.photoId} link={link} />)}
        </div>
        <button type="button" className={style.button} onClick={this.togglePhotoModal.bind(this)}>
          {`${photos.length} PHOTOS ▷`}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    photos: state.photos.photos,
    pending: state.photos.pending,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onRequestPhotos: () => dispatch(requestPhotos()),
    onPhotoModalRequest: () => dispatch(displayPhotoModal()),
  }
);

Photos.propTypes = {
  photos: Proptypes.instanceOf(Array).isRequired,
  pending: Proptypes.bool.isRequired,
  onRequestPhotos: Proptypes.func.isRequired,
  onPhotoModalRequest: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
