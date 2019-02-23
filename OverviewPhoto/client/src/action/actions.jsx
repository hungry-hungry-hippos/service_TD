import {
  REQUEST_PHOTOS_PENDING,
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED,
  TOGGLE_PHOTO_MODAL,
  TOGGLE_CAROUSEL_MODAL,
} from './actionTypes';

const requestPhotos = () => (dispatch) => {
  dispatch({ type: REQUEST_PHOTOS_PENDING });
  let id = parseInt(window.location.pathname.slice(1), 10);
  if (Number.isNaN(id)) {
    id = 1;
  }
  fetch(`/api/${id}`)
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_PHOTOS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_PHOTOS_FAILED, payload: error }));
};

export const displayCarouselModal = id => dispatch => dispatch(
  { type: TOGGLE_CAROUSEL_MODAL, payload: id },
);

export const displayPhotoModal = () => dispatch => dispatch(
  { type: TOGGLE_PHOTO_MODAL },
);

export default requestPhotos;
