import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Photo from './Photo';
import { displayPhotoModal } from '../action/actions';
import style from '../overview.module.css';


class ModalPhotos extends Component {
  togglePhotoModal() {
    const { onPhotoModalRequest } = this.props;
    onPhotoModalRequest();
  }

  render() {
    const { photos, name, openPhotoModal } = this.props;
    return (
      <div>
        {openPhotoModal && (
          <div
            className={style.modal}
            show={openPhotoModal.toString()}
            style={{
              display: 'block',
            }}
            id="ModalPhotos"
            tabIndex="-1"
            role="dialog"
            onClick={this.togglePhotoModal.bind(this)}
            aria-labelledby="ModalPhotosTitle"
            aria-hidden="true"
          >
            <div role="document">
              <div className={style.modalheader}>
                {name && <h5 className="modal-title text-center">{name.toUpperCase()}</h5>}
                <button type="button" className={style.closebutton} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="text-white"> &times; </span>
                </button>
              </div>
              <div className={`${style.modalcontent} ${style.photomodalcontent}`}>
                {photos.length && photos.map(link => <Photo key={link.photoId} link={link} />)}
              </div>
            </div>
          </div>
        )}
      </div>


    );
  }
}
const mapStateToProps = state => (
  {
    name: state.photos.name,
    photos: state.photos.photos,
    openPhotoModal: state.photos.openPhotoModal,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onPhotoModalRequest: () => dispatch(displayPhotoModal()),
  }
);

ModalPhotos.propTypes = {
  name: Proptypes.string.isRequired,
  photos: Proptypes.instanceOf(Array).isRequired,
  openPhotoModal: Proptypes.bool.isRequired,
  onPhotoModalRequest: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalPhotos);
