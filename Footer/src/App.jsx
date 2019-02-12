import React from 'react';
import Icon from './components/Icon';
import Signup from './components/Signup';

import style from './style.module.css';

const {
  instagram,
  twitter,
  periscope,
  facebook,
  snapchat,
  pinterest,
  tumbler,
  youtube,
  google,
} = require('./icons.jsx');


const App = () => {
  const allIcons = [instagram, twitter, periscope, facebook,
    snapchat, pinterest, tumbler, youtube, google];
  return (
    <div className={style.footertop}>
      <div className="row no-gutters">
        <div className="col col-12 col-lg-6 d-flex align-items-center">
          {allIcons.map(icon => <Icon key={icon.name} icon={icon} />)}
        </div>
        <div className="col col-12 col-lg-6 text-white mt-4 mt-lg-auto border-left border-light">
          <Signup />
        </div>
      </div>
    </div>
  );
};


export default App;
