import React from 'react';

const { style } = require('./style.jsx');


const App = () => (
  <div style={style.footertop}>
    <div style={style.row}>
      <div className="col span-1-of-2">
        <ul className="social-links">
          <li>
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-googleplus"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);


export default App;
