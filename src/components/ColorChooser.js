import React from 'react';

export default function ColorChooser({ selectedColor, onColorChange, onFocus }) {
  return (
    <input
      value={selectedColor}
      onChange={onColorChange}
      onFocus={onFocus}
    />
  );
}
