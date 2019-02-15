import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Photo from './Photo';
import style from '../overview.module.css';


class ModalPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  toggleModal() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const { photos } = this.props;
    const { showModal } = this.state;
    return (
      <div>
        {!showModal
          && (
            <button type="button" className={style.button} onClick={this.toggleModal.bind(this)}>
              {`${photos.length} PHOTOS ▷`}
            </button>
          )
        }

        <div
          className={style.modal}
          show={showModal.toString()}
          style={{
            display: `${showModal ? 'block' : 'none'}`,
          }}
          id="ModalPhotos"
          tabIndex="-1"
          role="dialog"
          onClick={this.toggleModal.bind(this)}
          aria-labelledby="ModalPhotosTitle"
          aria-hidden="true"
        >
          <div role="document">
            <div className={style.modalheader}>
              <h5 className="modal-title text-center">RESTAURANT NAME</h5>
              <button type="button" className={`close ${style.closebutton}`} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="text-white mr-3"> &times; </span>
              </button>
            </div>
            <div className={style.modalcontent}>
              <div>
                {photos.length && photos.map(link => <Photo key={link.photoId} link={link} />)}
              </div>
            </div>

          </div>
        </div>
      </div>


    );
  }
}
const mapStateToProps = state => (
  { photos: state.photos.photos }
);

ModalPhotos.propTypes = {
  photos: Proptypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(ModalPhotos);
