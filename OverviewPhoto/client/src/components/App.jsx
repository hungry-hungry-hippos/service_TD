import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Photos from './Photos';
import ModalPhotos from './ModalPhotos';
import CarouselModal from './CarouselModal';

const App = () => (
  <Provider store={store}>
    <div>
      <Photos />
      <ModalPhotos />
      <CarouselModal />
    </div>
  </Provider>
);


export default App;
