import {
  REQUEST_PHOTOS_PENDING,
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED,
} from '../action/actionTypes';

const initialState = {
  pending: false,
  name: '',
  photos: [],
  error: '',
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
    default:
      return state;
  }
};

export default requestPhotos;
