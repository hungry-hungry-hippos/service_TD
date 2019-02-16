import React from 'react';
import { connect } from 'react-redux';
import style from '../overview.module.css';

const CarouselModal = ({openCarouselModal}) => (
  <div>
    {openCarouselModal
      && (
        <div
          className={style.modal}
          show={openCarouselModal.toString()}
          style={{
            display: 'block',
          }}
          id="ModalPhotos"
          tabIndex="-1"
          role="dialog"
          // onClick={this.toggleModal.bind(this)}
          aria-labelledby="ModalPhotosTitle"
          aria-hidden="true"
        >
          <div role="document">
            <div className={style.modalheader}>
              {/* {name && <h5 className="modal-title text-center">{name.toUpperCase()}</h5>} */}
              <h5>TESTING</h5>
              <button type="button" className={`close ${style.closebutton}`} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="text-white"> &times; </span>
              </button>
            </div>
            <div className={style.modalcontent}>
              HELLLLOOOOOOOO
            </div>
          </div>
        </div>
      )
    }
  </div>
)

const mapStateToProps = state => (
  {
    openCarouselModal: state.photos.openCarouselModal,
  }
)

export default connect(mapStateToProps)(CarouselModal);