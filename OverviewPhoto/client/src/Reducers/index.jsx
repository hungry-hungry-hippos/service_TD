import { combineReducers } from 'redux';
import requestPhotos from './reducers';

export default combineReducers({
  photos: requestPhotos,
});
