import React, { Component } from 'react';
import './App.css';
import MyCars from './components/MyCars';

class App extends Component {
  state = {
    title: 'Cars Catalog',
  };

  render() {
    return (
      <div className='App'>
        <MyCars title={this.state.title}></MyCars>
      </div>
    );
  }
}

export default App;
