import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import requestPhotos from '../action/actions';

class Photos extends Component {
  componentDidMount() {
    const { onRequestPhotos } = this.props;
    onRequestPhotos();
  }

  render() {
    const { pending, photos } = this.props;
    if (pending && !photos.length) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        {/* {photos.map(link => (
          <img src={link[1]} alt="" />
        ))} */}
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
