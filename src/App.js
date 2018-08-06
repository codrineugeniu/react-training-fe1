import React, { Component } from 'react';
import MyHeader from './components/Header';
import ColorButtons from './components/ColorButtons';
import ColorChooser from './components/ColorChooser';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputColor: '',
      selectedColor: '',
    };
  }


  onColorChange = (event) => {
    const { value } = event.target;
    const { selectedColor } = this.state;
    const newValue = selectedColor + value;
    this.setState({
      selectedColor: newValue,
    });
  }

  onSelectColor = (color) => {
    this.setState({
      selectedColor: color,
    });
  }

  onFocus = () => {
    this.setState({
      selectedColor: '',
    });
  }

  render() {
    const { selectedColor, inputColor } = this.state;
    return (
      <div className="App">
        <MyHeader
          title="Hello React-Demo"
          color={selectedColor}
        />
        <div>
          <ColorChooser
            selectedColor={inputColor}
            onColorChange={this.onColorChange}
            onFocus={this.onFocus}
          />
        </div>
        <ColorButtons onSelectColor={this.onSelectColor} />
        <Footer />
      </div>
    );
  }
}

const Footer = () => (
  <footer>
    <p>
      ColorChooser Footer
    </p>
  </footer>
);

export default App;
