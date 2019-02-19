import {
  REQUEST_PHOTOS_PENDING,
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED,
  TOGGLE_PHOTO_MODAL,
  TOGGLE_CAROUSEL_MODAL,
} from '../action/actionTypes';

const initialState = {
  pending: false,
  name: '',
  photos: [],
  error: '',
  currentStoreId: null,
  openPhotoModal: false,
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
    case TOGGLE_PHOTO_MODAL:
      return {
        ...state,
        openPhotoModal: !state.openPhotoModal,
      };
    case TOGGLE_CAROUSEL_MODAL:
      return {
        ...state,
        currentStoreId: action.payload,
        openCarouselModal: !state.openCarouselModal,
      };
    default:
      return state;
  }
};

export default requestPhotos;

// could have separate into 2 reducers
