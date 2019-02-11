import React from 'react';
import Icon from './components/Icon';

const { style } = require('./style.jsx');
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
    <div style={style.footertop}>
      <div className="row no-gutters">
        <div className="col col-12 col-lg-6 d-flex text-white">
          {allIcons.map(icon => <Icon key={icon.name} icon={icon} />)}
        </div>
        <div className="col col-12 col-lg-6 text-white">
          Hi
        </div>
      </div>
    </div>
  );
};


export default App;
