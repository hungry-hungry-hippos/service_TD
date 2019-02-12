import React, { Component } from 'react';
import style from '../style.module.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div className="ml-5">
        <h5>GET ZAGAT &apos; S NEWSLETTER IN YOUR INBOX...</h5>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            name="signup"
            placeholder="ENTER YOUR EMAIL"
            value={value}
          // onChange={this.onChange.bind(this)}
          />
          <div className="input-group-append">
            <span className={`input-group-text ${style.button}`}>&#62;</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
