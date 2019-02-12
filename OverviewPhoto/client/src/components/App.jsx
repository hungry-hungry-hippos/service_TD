import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Hello world</h1>
    </div>
  </Provider>
);


export default App;
