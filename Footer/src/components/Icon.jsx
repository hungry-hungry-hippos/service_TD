import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: true,
    };
  }

  onHover() {
    const { hover } = this.state;
    this.setState({ hover: !hover });
  }

  render() {
    const { hover } = this.state;
    const { icon } = this.props;
    const { link, white, black } = icon;
    return (
      <div className="flex-item mx-2" onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onHover.bind(this)}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            alt=""
            src={hover ? black : white}
            style={{
              height: '48px', width: 'auto', backgroundColor: 'white', border: 'solid white 2px', borderRadius: '50%',
            }}
          />
        </a>
      </div>
    );
  }
}

Icon.propTypes = {
  icon: Proptypes.shape({
    name: Proptypes.string.isRequired,
    link: Proptypes.string.isRequired,
    black: Proptypes.string.isRequired,
    white: Proptypes.string.isRequired,
  }).isRequired,
};

export default Icon;
