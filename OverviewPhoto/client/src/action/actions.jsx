import {
  REQUEST_PHOTOS_PENDING,
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED,
  OPEN_CAROUSEL_MODAL,
} from './actionTypes';

const requestPhotos = () => (dispatch) => {
  dispatch({ type: REQUEST_PHOTOS_PENDING });
  const id = parseInt(window.location.pathname.slice(1), 10);
  if (!Number.isNaN(id)) {
    fetch(`http://localhost:3020/api/${id}`)
      .then(response => response.json())
      .then(data => dispatch({ type: REQUEST_PHOTOS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_PHOTOS_FAILED, payload: error }));
  }
};

export const displayCarouselModal = () => dispatch => dispatch({ type: OPEN_CAROUSEL_MODAL });

export default requestPhotos;
