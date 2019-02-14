import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import requestPhotos from '../action/actions';
import style from '../overview.module.css';
import ModalPhotos from './ModalPhotos';

class Photos extends Component {
  componentDidMount() {
    const { onRequestPhotos } = this.props;
    onRequestPhotos();
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
          {sortPhotos.map(link => (
            <div className={style.photos} key={link.photoId}>
              <div className={style.photo}>
                <img src={link.photo_url} alt="" className={style.img} />
              </div>
            </div>
          ))}
        </div>
        <ModalPhotos />
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
  }
);

Photos.propTypes = {
  photos: Proptypes.instanceOf(Array).isRequired,
  pending: Proptypes.bool.isRequired,
  onRequestPhotos: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
