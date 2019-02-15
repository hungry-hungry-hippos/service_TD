import React, { Component } from 'react';
import Proptypes from 'prop-types';
import style from '../overview.module.css';

class Photo extends Component {
  onClick() {
    console.log('click')
  }

  render() {
    const { link } = this.props;
    return (
      <div className={style.photos} key={link.photoId}>
        <div className={style.photo}>
          <img src={link.photo_url} alt="" className={`${style.img} img-fluid`} onClick={this.onClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

Photo.propTypes = {
  link: Proptypes.shape({
    photoId: Proptypes.number.isRequired,
    photo_url: Proptypes.string.isRequired,
  }).isRequired,
};

export default Photo;
