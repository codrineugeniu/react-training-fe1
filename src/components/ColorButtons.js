import React, { Component } from 'react';

class ColorButtons extends Component {
  onClick = (color) => {
    const { onSelectColor } = this.props;
    onSelectColor(color);
  }

  render() {
    const { buttons } = this.props;
    return (
      <div className="color-button-container">
        {
          buttons.length > 0 ? buttons.map((button) => {
            return (
              <button type="button" onClick={() => this.onClick(button)}>
                {button.name}
              </button>
            );
          }) : <span>Loading...</span>
        }
      </div>
    );
  }
}

export default ColorButtons;
