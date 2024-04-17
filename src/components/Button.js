import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { style, onClick, label } = this.props;
    
    return (
      <button onClick={onClick} style={style}>
        {label}
      </button>
    );
  }
}

export default Button;
