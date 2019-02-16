import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import style from '../overview.module.css';

const Photo = ({ link }) => (
  <div className={style.photos} key={link.photoId}>
    <div className={style.photo}>
      <img src={link.photo_url} alt="" className={style.img} />
    </div>
  </div>
);


Photo.propTypes = {
  link: Proptypes.shape({
    photoId: Proptypes.number.isRequired,
    photo_url: Proptypes.string.isRequired,
  }).isRequired,
};

export default Photo;
