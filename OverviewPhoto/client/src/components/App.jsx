import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Photos from './Photos';

const App = () => (
  <Provider store={store}>
    <div>
      <Photos />
    </div>
  </Provider>
);


export default App;
