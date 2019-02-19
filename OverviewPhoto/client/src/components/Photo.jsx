import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { displayCarouselModal } from '../action/actions';
import style from '../overview.module.css';

class Photo extends Component {
  onClick(e) {
    const clickedId = Number(e.target.id);
    const { onCarouselModalRequest } = this.props;
    onCarouselModalRequest(clickedId);
  }

  render() {
    const { link } = this.props;
    return (
      <div className={style.photos} key={link.photoId}>
        <div className={style.photo}>
          <img src={link.photo_url} alt="" className={style.img} id={link.photoId} onClick={this.onClick.bind(this)} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    onCarouselModalRequest: id => dispatch(displayCarouselModal(id)),
  }
);

Photo.propTypes = {
  link: Proptypes.shape({
    photoId: Proptypes.number.isRequired,
    photo_url: Proptypes.string.isRequired,
  }).isRequired,
  onCarouselModalRequest: Proptypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Photo);
