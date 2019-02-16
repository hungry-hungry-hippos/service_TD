import {
  REQUEST_PHOTOS_PENDING,
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED,
  OPEN_CAROUSEL_MODAL,
} from '../action/actionTypes';

const initialState = {
  pending: false,
  name: '',
  photos: [],
  error: '',
  openCarouselModal: false,
};

const requestPhotos = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case REQUEST_PHOTOS_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        photos: action.payload.links,
        pending: false,
      };
    case REQUEST_PHOTOS_FAILED:
      return {
        ...state,
        error: action.payload,
        pending: false,
      };
    case OPEN_CAROUSEL_MODAL:
      return {
        ...state,
        openCarouselModal: !state.openCarouselModal,
      };
    default:
      return state;
  }
};

export default requestPhotos;
