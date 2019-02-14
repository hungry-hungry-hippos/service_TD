import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import style from '../overview.module.css';


class ModalPhotos extends Component {
  onClick() {
    console.log('click', this);
  }

  render() {
    const { photos } = this.props;
    return (
      <button
        type="button"
        className={style.button}
        onClick={this.onClick.bind(this)}
      >
        {`${photos.length} PHOTOS ▷`}
      </button>

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
