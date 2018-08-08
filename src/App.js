import React, { Component } from 'react';
import axios from 'axios';
import MyHeader from './components/Header';
import ColorButtons from './components/ColorButtons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: '',
      buttons: [],
    };
  }

  componentWillMount() {
    axios.get('http://localhost:5000/buttons').then((response) => {
      this.setState({
        buttons: response.data,
      });
    });
    axios.get('http://localhost:5000/profile').then((response) => {
      this.setState({
        selectedColorCode: response.data.selectedColor,
      });
    });
  }

  onSelectColor = (color) => {

    axios.put('http://localhost:5000/profile', { selectedColor: color.hexCode }).then(() => {
      this.setState({
        selectedColorName: color.name,
        selectedColorCode: color.hexCode,
      });
    });
  }

  render() {
    const { selectedColorName, selectedColorCode, buttons } = this.state;
    return (
      <div className="App">
        <MyHeader
          title="Hello React-Demo"
          color={selectedColorName}
          hexCode={selectedColorCode}
        />
        <ColorButtons onSelectColor={this.onSelectColor} buttons={buttons} />
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
