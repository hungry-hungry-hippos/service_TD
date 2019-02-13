import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import requestPhotos from '../action/actions';

class Photos extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: '',
    }
  };

  render() {
    const { pending, photos } = this.props;
    if (pending && !photos.length) {
      return (
        <div>Loading</div>
      );
    }
    return (
      <h1>Hello World</h1>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
