import { REQUEST_PHOTOS_PENDING } from '../actionTypes';

const initialState = {
  pending: false,
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
    default:
      return state;
  }
};

export default requestPhotos;
