import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
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
          && <button type="button" className={`${style.button} ModalPhotos`} onClick={this.toggleModal.bind(this)} data-toggle="modal" data-target="#ModalPhotos">{`${photos.length} PHOTOS ▷`}</button>}

        <div
          className="modal constainer"
          show={showModal.toString()}
          style={{
            display: `${showModal ? 'block' : 'none'}`,
          }}
          id="ModalPhotos"
          tabIndex="-1"
          role="dialog"
          onClick={this.toggleModal.bind(this)}
          aria-labelledby="ModalPhotosCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title">Restaurant Name</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="text-white"> &times; </span>
                </button>
              </div>
              <div className="modal-body">
                {photos.length
                  && <div className={style.photo}><img src={photos[0].photo_url} alt="" className={style.img} /></div>
                }
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
