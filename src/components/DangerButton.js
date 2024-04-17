import React, { Component } from 'react';
import Button from './Button.js';

class DangerButton extends Component {
  render() {
    const { style, onClick, label } = this.props;
    return <Button style={style} onClick={onClick} label={label} />;
  }
}

export default DangerButton;
