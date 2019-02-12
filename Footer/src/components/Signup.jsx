import React, { Component } from 'react';
import style from '../style.module.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onClick() {
    const { value } = this.state;
    console.log(value);
    // in realily, the email will be send to server
  }

  render() {
    const { value } = this.state;
    return (
      <div className="container mx-2">
        <h5>GET ZAGAT &apos; S NEWSLETTER IN YOUR INBOX...</h5>
        <div className="input-group">
          <input
            className="form-control"
            type="email"
            name="signup"
            required
            placeholder="ENTER YOUR EMAIL"
            value={value}
            onChange={this.onChange.bind(this)}
          />
          <div className="input-group-append">
            <button
              type="button"
              className={`input-group-text ${style.button}`}
              onClick={this.onClick.bind(this)}
            >
              &#62;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
