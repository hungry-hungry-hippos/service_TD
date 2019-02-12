import {
  REQUEST_PHOTOS_PENDING,
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED,
} from './actionTypes';

const requestPhotos = () => (dispatch) => {
  dispatch({ type: REQUEST_PHOTOS_PENDING });
  fetch('https://localhost:3020/1')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_PHOTOS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_PHOTOS_FAILED, payload: error }));
};

export default requestPhotos;