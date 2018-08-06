import React from 'react';

export default function ColorChooser(props) {
  return (
    <input
      value={props.selectedColor}
      onChange={props.onColorChange}
      onFocus={props.onFocus}
    />
  )
}