import React from 'react';

const { style } = require('./style.jsx');


const App = () => (
  <div style={style.footertop}>
    <div className="row no-gutters">
      <div className="col col-12 col-lg-6 d-flex text-white">
        <div className="flex-item">
          <a href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>
        <div className="flex-item">
          <a href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
        <div className="flex-item">
          <a href="#">
            <ion-icon name="logo-googleplus"></ion-icon>
          </a>
        </div>
        <div className="flex-item">
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
      <div className="col col-12 col-lg-6 text-white">
        Hi
      </div>
    </div>
  </div>
);


export default App;
