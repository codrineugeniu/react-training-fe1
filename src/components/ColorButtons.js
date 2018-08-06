import React, { Component } from 'react';

class ColorButtons extends Component {
  onClick = (color) => {
    const { onSelectColor } = this.props;
    onSelectColor(color);
  }

  render() {
    return (<div className="color-button-container">
      <button onClick={() => this.onClick("Green")}>Green</button>
      <button onClick={() => this.onClick("Fuchsia")}>Fuchsia</button>
      <button onClick={() => this.onClick("White")}>White</button>
    </div>)
  }
}

export default ColorButtons;

