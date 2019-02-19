import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { displayCarouselModal } from '../action/actions';
import ImageCarousel from './ImageCarousel';
import style from '../overview.module.css';

class CarouselModal extends Component {
  toggleCarouselModal() {
    const { onModalRequest } = this.props;
    onModalRequest();
  }

  render() {
    const { openCarouselModal, name } = this.props;
    return (
      <div>
        {openCarouselModal && (
          <div
            className={style.modal}
            show={openCarouselModal.toString()}
            style={{
              display: 'block',
            }}
            id="ModalPhotos"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="ModalPhotosTitle"
            aria-hidden="true"
          >
            <div role="document">
              <div className={style.modalheader}>
                {name && <h5 className="modal-title text-center">{name.toUpperCase()}</h5>}
                <button
                  type="button"
                  className={style.closebutton}
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.toggleCarouselModal.bind(this)}
                >
                  <span aria-hidden="true" className="text-white"> &times; </span>
                </button>
              </div>
              <div className={`${style.modalcontent} ${style.carouselmodal}`}>
                <ImageCarousel />
              </div>
            </div>
          </div>
        )
        }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    name: state.photos.name,
    openCarouselModal: state.photos.openCarouselModal,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onModalRequest: () => dispatch(displayCarouselModal()),
  }
);

CarouselModal.propTypes = {
  name: Proptypes.string.isRequired,
  openCarouselModal: Proptypes.bool.isRequired,
  onModalRequest: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselModal);
